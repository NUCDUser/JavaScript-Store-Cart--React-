import React, { useState } from 'react';
import {} from 'react-dom';
import { FormCheck, Form, Button, Nav } from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../context_manager/Context';

const Filters = () => {
  const [rate, setRate] = useState(3);
  const {
    productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
    productDispatch,
  } = CartState();
  console.log(byStock, byFastDelivery, sort, byRating, searchQuery);
  return (
    <div className='d-flex flex-column flex-shrink-0 p-3 text-bg-dark'>
      <h3>Filters</h3>
      <hr />
      <Nav as={'ul'} className='nav-pills flex-column mb-auto'>
        <Nav.Item>
          <Form.Check
            inline
            label='Ascending'
            name='group1'
            type='radio'
            id={'inline-1'}
            onChange={() =>
              productDispatch({
                type: 'SORT_BY_PRICE',
                payload: 'lowToHigh',
              })
            }
            checked={sort === 'lowToHigh' ? true : false}
          />
        </Nav.Item>
        <Nav.Item>
          <Form.Check
            inline
            label='Descending'
            name='group1'
            type='radio'
            id={'inline-2'}
            onChange={() =>
              productDispatch({
                type: 'SORT_BY_PRICE',
                payload: 'highToLow',
              })
            }
            checked={sort === 'highToLow' ? true : false}
          />
        </Nav.Item>
        <Nav.Item>
          <Form.Check
            inline
            label='Fast Shipping'
            name='group1'
            type='checkbox'
            id={'inline-3'}
            onChange={() =>
              productDispatch({
                type: 'FILTER_BY_DELIVERY',
              })
            }
            checked={byFastDelivery}
          />
        </Nav.Item>
        <Nav.Item>
          <Form.Check
            inline
            label='Exclude Out of Stock'
            name='group1'
            type='checkbox'
            id={'inline-4'}
            onChange={() =>
              productDispatch({
                type: 'FILTER_BY_STOCK',
              })
            }
            checked={byStock}
          />
        </Nav.Item>
        <Nav.Item>
          <label htmlFor='rating' style={{ paddingRight: 10 }}>
            Rating:
          </label>
          <Rating
            rating={byRating}
            style={{ cursor: 'pointer' }}
            onClick={(r) =>
              productDispatch({
                type: 'FILTER_BY_RATING',
                payload: r + 1,
              })
            }
          />
        </Nav.Item>
      </Nav>
      <Button
        variant='light'
        onClick={() =>
          productDispatch({
            type: 'CLEAR_FILTER',
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
