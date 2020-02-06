/* eslint-disable */
import React from 'react';

import Headers from './Header/headers.jsx';
import ImageView from './ImageGallery/ImageView/imageView.jsx';
import Share from './ProductDetail/ShareOnSocials/Share.jsx';
import StyleSelector from './StyleSelector/styleSelector.jsx';
import AddToCart from './AddToCart/addToCart.jsx';
import ProductDescription from './ProductDescription/ProductDescription.jsx';
import ProductDetail from './ProductDetail/ProductDetail.jsx';
import axios from 'axios';

// sample data import
// import productList from './sampleData/productList.js';
// import details from './sampleData/details.js';
// import styles from './sampleData/styles.js';

import './PO.scss';

const url = ' http://3.134.102.30';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: undefined,
      styles: undefined,
      productList: undefined,
      currentStyle: undefined,
      currentImage: undefined,
      currentIndex: 0,
      placeholder: undefined,
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
  }
  async componentDidMount() {
    const { productId } = this.props;
    const getStyles = await axios.get(`${url}/products/${productId}/styles`);
    const getList = await axios.get(`${url}/products/${productId}`);
    this.setState({
      productId: productId,
      styles: getStyles.data.results,
      currentStyle: getStyles.data.results[0],
      currentImage: getStyles.data.results[0].photos.url,
      productList: getList.data,
      placeholder: getList.data,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productId !== this.props.productId) {
      this.setState({
        productId: this.props.productId,
      });
      this.componentDidMount();
    }
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
    } = this.state;

    const { changeProduct } = this.props;

    if (styles) {
      return (
        <div className="ProductOverview">
          <div className="headers">
            <Headers changeProduct={changeProduct} />
          </div>

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
            <div className="starReveiws">Star Review Component</div>
            <div className="ProductDetail">
              <ProductDetail currentStyle={currentStyle} data={productList} />
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
              <ProductDescription data={productList} />
            </div>
            <div className="share">
              <Share />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProductOverview;
