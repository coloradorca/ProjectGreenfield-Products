import React from 'react';
import Headers from './Header/headers.jsx';

import Slider from './ImageGallery/Slider/Slider.jsx';

import Share from './ProductDetail/ShareOnSocials/Share.jsx';
// import productList from './sampleData/productList.json';
// import details from './sampleData/details.json';
// import styles from './sampleData/styles.json';

class ProductOverview extends React.Component {
  constructor() {
    super();
    ``;
    this.state = {
      text: 'Product Overview',
    };
  }

  render() {
    return (
      <div className="ProductOverview">
        {this.state.text}
        {/* <Headers /> */}
        <div className="addToCartComponent"></div>
        <div className="sliderComponent">
          <Slider />
        </div>
        <Share />
      </div>
    );
  }
}

export default ProductOverview;
