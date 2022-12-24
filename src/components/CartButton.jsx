import { Button, Dropdown, Image, Stack } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { Link } from 'react-router-dom';
import Cart from '../assets/icons/Cart';
import Trashcan from '../assets/icons/Trashcan';
import { CartState } from '../context_manager/Context';

function CartButton() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant='success'
        id='cart-button'
        className='position-relative'
      >
        <Cart />
        {cart.length > 0 && (
          <span className='position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger'>
            {cart.length}
            <span className='visually-hidden'>items in cart</span>
          </span>
        )}
      </Dropdown.Toggle>
      <DropdownMenu align={'end'}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <Dropdown.Item key={item.id} href={`#${item.name}`}>
              <Stack direction='horizontal' gap={2}>
                <Image src={item.image} height={64} alt={item.name} />
                <div className='d-flex flex-column'>
                  <span>{item.name}</span>
                  <span className='text-muted'>A random description</span>
                </div>
                <Button
                  className='ms-auto'
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
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item bsPrefix='dropdown-item-text'>
            Cart is empty
          </Dropdown.Item>
        )}
        <Dropdown.Item bsPrefix='dropdown-item-text'>
          <hr className='dropdown-divider' />
        </Dropdown.Item>
        <Dropdown.Item bsPrefix='dropdown-item-text' className='text-center'>
          <Link to='/cart'>Go to Cart</Link>
        </Dropdown.Item>
      </DropdownMenu>
    </Dropdown>
  );
}

export default CartButton;
