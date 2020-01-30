import React from 'react';
import Headers from './Header/headers.jsx';

import Slider from './ImageGallery/Slider/Slider.jsx';

import ExpandedView from './ImageGallery/ExpandedView/ExpandedView.jsx';

import Share from './ProductDetail/ShareOnSocials/Share.jsx';

import StyleSelector from './StyleSelector/styleSelector.jsx';
// import productList from './sampleData/productList.json';
// import details from './sampleData/details.json';
// import styles from './sampleData/styles.json';

import './PO.scss';

class ProductOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'Product Overview',
    };
  }

  render() {
    return (
      <div className="ProductOverview">
        {this.state.text}
        {/* <Headers /> */}
        {/* <div className="sliderComponent">
          <Slider />
        </div> */}
        <div id="ExpandedView" className="ExpandedView">
          <ExpandedView />
        </div>
        <div className="StyleSelector">
          <StyleSelector />
        </div>
      </div>
    );
  }
}

export default ProductOverview;
