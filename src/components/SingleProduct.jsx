import React from 'react';
import { Card } from 'react-bootstrap';

const SingleProduct = ({ product }) => {
  return (
    <Card>
      <Card.Img variant='top' src={product.image} alt={product.name} />
    </Card>
  );
};

export default SingleProduct;
