import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { CartState } from '../context_manager/Context';

const Item = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Col>
      <Card>
        <Card.Img variant='top' src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className='text-muted fs-6'>
            {product.fastDelivery && 'Fast Delivery'}
          </Card.Text>
          <Card.Text className='text-muted fs-6'>${product.price}</Card.Text>
          {cart.some((p) => p.id === product.id) ? (
            <Button
              onClick={() =>
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: product,
                })
              }
              variant='danger'
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: product,
                })
              }
              variant={product.inStock ? 'primary' : 'secondary'}
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
