import React from 'react';
import Item from '../components/Item';
import { CartState } from '../context_manager/Context';
import { Container, Row } from 'react-bootstrap';
import Filters from '../components/Filters';

const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      );
    }
    if (byStock) {
      sortedProducts = sortedProducts.filter((item) => item.inStock > 0);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((item) => item.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter((item) => {
        return item.ratings >= byRating;
      });
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return sortedProducts;
  };

  return (
    <div className='home'>
      <Container>
        <Filters />
        <Row lg={3} md={2} sm={1} xs={1} className='g-5'>
          {transformProducts().map((product) => {
            return <Item product={product} key={product.id} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
