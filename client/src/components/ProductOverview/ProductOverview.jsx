import React from 'react';

import Headers from './Header/headers.jsx';
import Slider from './ImageGallery/Slider/Slider.jsx';
import ExpandedView from './ImageGallery/ExpandedView/expandedView.jsx';
import Share from './ProductDetail/ShareOnSocials/Share.jsx';
import StyleSelector from './StyleSelector/styleSelector.jsx';
import AddToCart from './AddToCart/addToCart.jsx';
import ProductDescription from './ProductDescription/ProductDescription.jsx';
import ProductDetail from './ProductDetail/ProductDetail.jsx';

//sample data import
import productList from './sampleData/productList.js';
import details from './sampleData/details.js';
import styles from './sampleData/styles.js';

import './PO.scss';

class ProductOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      styles: styles[0].results,
      productList: productList,
      details: details,
    };
  }

  render() {
    return (
      <div className="ProductOverview">
        {/* <Headers /> */}
        {/* <div className="sliderComponent">
          <Slider />
        </div> */}
        <div className="leftContainer">
          <div id="ExpandedView" className="ExpandedView">
            <ExpandedView />
          </div>
        </div>
        <div className="rightContainer">
          <div className="ProductDetail">
            <ProductDetail data={this.state.productList[0]} />
          </div>
          <div className="StyleSelector">
            <StyleSelector />
          </div>
          <br />
          <div className="AddToCart">
            <AddToCart data={this.state.styles[0]} />
          </div>
        </div>
        <div className="bottomContainer">
          <ProductDescription data={this.state.details[0]} />
        </div>
      </div>
    );
  }
}

export default ProductOverview;
