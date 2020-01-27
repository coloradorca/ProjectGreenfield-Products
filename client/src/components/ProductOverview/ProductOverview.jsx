import React from 'react';
// import Headers from './Header/headers.jsx';

import Slider from './ImageGallery/Slider/Slider.jsx';

// import productList from './sampleData/productList.json';
// import details from './sampleData/details.json';
// import styles from './sampleData/styles.json';

class ProductOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'Product Overview',
    };
  }

  render() {
    // console.log(styles);
    return (
      <div>
        {this.state.text}
        <Slider />
        {/* <Headers /> */}
      </div>
    );
  }
}

export default ProductOverview;
