import React from 'react';
import Stars from '../assets/icons/Stars';

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        let starFill = i < rating ? 'full' : 'empty';
        return (
          <span key={i} onClick={() => onClick(i)} style={style}>
            <Stars fill={starFill} />
          </span>
        );
      })}
    </>
  );
};

export default Rating;
