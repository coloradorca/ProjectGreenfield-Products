import React from 'react';

import Headers from './Header/headers.jsx';
import DefaultView from './ImageGallery/DefaultView/DefaultView.jsx';
import ImageView from './ImageGallery/ImageView/imageView.jsx';
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
      currentStyle: styles[0].results[0],
    };
    this.changeStyle = this.changeStyle.bind(this);
  }

  changeStyle(newStyle) {
    this.setState({
      currentStyle: newStyle,
    });
  }

  render() {
    // console.log(this.state.currentStyle);
    return (
      <div className="ProductOverview">
        <div className="headers">{/* <Headers /> */}</div>

        <div className="leftContainer">
          <div id="ImageView" className="ImageView">
            <ImageView gallery={this.state.currentStyle} />
          </div>
        </div>
        <div className="rightContainer">
          <div className="ProductDetail">
            <ProductDetail
              currentStyle={this.state.currentStyle}
              data={this.state.productList[0]}
            />
          </div>
          <div className="StyleSelector">
            <StyleSelector
              changeStyle={this.changeStyle}
              styles={this.state.styles}
            />
          </div>
          <br />
          <div className="AddToCart">
            <AddToCart data={this.state.styles[0]} />
          </div>
        </div>
        <div className="bottomContainer">
          <div className="prodcutDescription">
            <ProductDescription data={this.state.details[0]} />
          </div>
          <div className="share">
            <Share />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductOverview;
