/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './ProductDescription.scss';

function ProductDescription(props) {
  const { data } = props;
  return (
    <div className="PDOverview">
      <div className="productSlogan">{data.slogan}</div>
      <div className="productDescription">{data.description}</div>
      <div className="features">
        {data.features.map((el, i) => (
          <div key={el.feature}>
            <span>{el.feature}</span> : <span>{el.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDescription;
