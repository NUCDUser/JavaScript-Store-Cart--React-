import React from 'react';
import {
  Container,
  FormControl,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartState } from '../context_manager/Context';
import CartButton from './CartButton';

const Header = () => {
  const { productDispatch } = CartState();
  return (
    <Navbar
      bg='dark'
      expand='lg'
      variant='dark'
      style={{ height: 80 }}
      className='border-bottom border-white'
    >
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className='text-white'>
            Hello Store
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/home'>Home</Nav.Link>
          </Nav>
          <FormControl
            style={{ width: 500 }}
            placeholder='Search'
            className='m-auto'
            onChange={(e) =>
              productDispatch({
                type: 'FILTER_BY_SEARCH',
                payload: e.target.value,
              })
            }
          ></FormControl>
        </Navbar.Collapse>
        <CartButton />
      </Container>
    </Navbar>
  );
};

export default Header;
