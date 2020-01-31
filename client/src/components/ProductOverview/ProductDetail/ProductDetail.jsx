import React from 'react';

import './ProductDetail.scss';

function ProductDetail(props) {
  // console.log(props.currentStyle.sale_price);
  let origPrice = props.currentStyle.original_price;
  const salePrice = props.currentStyle.sale_price;
  let price;
  if (salePrice > 0) {
    // price = props.currentStyle.sale_price;
    price = props.currentStyle.sale_price;
  } else {
    price = props.currentStyle.original_price;
  }

  return (
    <div className="ProductDetail">
      <div className="productCategory">{props.data.category}</div>
      <div className="productName">{props.data.name}</div>

      {/* if the sale price is not equal to 0, show the sale price with the original price struck thru, otherwise, display sale price
      <strike></strike> */}
      <div className="productPrice">
        {props.currentStyle.sale_price > 0 && (
          <strike>$ {props.currentStyle.original_price}</strike>
        )}{' '}
        $ {price}
      </div>
    </div>
  );
}

export default ProductDetail;
