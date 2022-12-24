import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Form,
  Image,
  Row,
  Stack,
  Col,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { CartState } from '../context_manager/Context';
import Trashcan from '../assets/icons/Trashcan';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, currentItem) => acc + Number(currentItem.price) * currentItem.qty,
        0
      )
    );
  }, [cart]);

  return (
    <Container>
      <Row className='mt-5'>
        <Col xs={8}>
          <ListGroup>
            {cart.map((item) => (
              <ListGroupItem key={item.id}>
                <Stack
                  direction='horizontal'
                  className='justify-content-between'
                >
                  <Image src={item.image} height={64} alt={item.name} rounded />
                  <div className='d-flex flex-column'>
                    <span>{item.name}</span>
                    <span className='text-muted'>
                      A random description of this item
                    </span>
                  </div>
                  <Form.Select
                    aria-label='total items to buy'
                    style={{ maxWidth: 80 }}
                    value={item.qty}
                    onChange={(e) =>
                      dispatch({
                        type: 'CHANGE_ITEM_QTY',
                        payload: { id: item.id, qty: e.target.value },
                      })
                    }
                  >
                    {[...Array(item.inStock).keys()].map((value) => {
                      let i = value + 1;
                      return (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      );
                    })}
                  </Form.Select>
                  <span>${item.price}</span>
                  <Button
                    variant='danger'
                    onClick={() => {
                      dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: item,
                      });
                    }}
                  >
                    <Trashcan />
                  </Button>
                </Stack>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col
          xs={4}
          className='bg-dark text-white py-3'
          style={{ height: 600, minHeight: '100%' }}
        >
          <div className='bg-text-dark d-flex flex-column'>
            <h3>Subtotal ({cart.length})</h3>
            <p>Total: ${total}</p>
            <Button variant='primary'>Proceed to Checkout</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
