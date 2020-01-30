import React from 'react';

import './ProductDetail.scss';

function ProductDetail(props) {
  return (
    <div className="ProductDetail">
      <div className="productCategory">{props.data.category}</div>
      <div className="productName">{props.data.name}</div>
      <div className="productPrice"> $ {props.data.default_price} </div>
    </div>
  );
}

export default ProductDetail;
