/* eslint-disable */
import React from 'react';

import Headers from './Header/headers.jsx';
import ImageView from './ImageGallery/ImageView/imageView.jsx';
import Share from './ProductDetail/ShareOnSocials/Share.jsx';
import StyleSelector from './StyleSelector/styleSelector.jsx';
import AddToCart from './AddToCart/addToCart.jsx';
import ProductDescription from './ProductDescription/ProductDescription.jsx';
import ProductDetail from './ProductDetail/ProductDetail.jsx';

// sample data import
import productList from './sampleData/productList.js';
import details from './sampleData/details.js';
import styles from './sampleData/styles.js';

import './PO.scss';

class ProductOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      styles: styles[0].results,
      productList,
      details,
      currentStyle: styles[0].results[0],
      currentImage: styles[0].results[0].photos[0].url,
      currentIndex: 0,
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeStyle(newStyle) {
    this.setState({
      currentStyle: newStyle,
    });
  }

  changeImage(newUrl) {
    this.setState({
      currentImage: newUrl,
    });
  }

  changeIndex(num) {
    this.setState({
      currentIndex: num,
    });
  }

  render() {
    const {
      currentIndex,
      currentImage,
      currentStyle,
      productList,
      styles,
      details,
    } = this.state;

    return (
      <div className="ProductOverview">
        <div className="headers">{/* <Headers /> */}</div>

        <div className="leftContainer">
          <div id="ImageView" className="ImageView">
            <ImageView
              currentIndex={currentIndex}
              changeStyle={this.changeStyle}
              changeImage={this.changeImage}
              currentStyle={currentStyle}
              currentImage={currentStyle.photos[currentIndex].url}
              changeIndex={this.changeIndex}
            />
          </div>
        </div>
        <div className="rightContainer">
          <div className="ProductDetail">
            <ProductDetail currentStyle={currentStyle} data={productList[0]} />
          </div>
          <div className="StyleSelector">
            <StyleSelector
              changeImage={this.changeImage}
              changeStyle={this.changeStyle}
              styles={styles}
            />
          </div>
          <br />
          <div className="AddToCart">
            <AddToCart data={styles[0]} />
          </div>
        </div>
        <div className="bottomContainer">
          <div className="prodcutDescription">
            <ProductDescription data={details[0]} />
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
