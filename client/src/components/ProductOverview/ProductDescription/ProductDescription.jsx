import React from 'react';

import './ProductDescription.scss';

function ProductDescription(props) {
  return (
    <div className="PDOverview">
      <div className="productSlogan">{props.data.slogan}</div>
      <div className="productDescription">{props.data.description}</div>
      <div className="features">
        {props.data.features.map((el, i) => (
          <div key={i}>
            <span>{el.feature}</span> : <span>{el.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDescription;
