import React from 'react';

const CartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    let { id, image, title, price, category, productDetail } = action.payload;
    console.log(productDetail);
  }

  return state;
};

export default CartReducer;