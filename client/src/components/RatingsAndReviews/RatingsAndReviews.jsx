/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import NewReview from './NewReview.jsx';
import ReviewBreakdown from './Graph/ReviewBreakdown.jsx';
import exampleData from '../../../../sampleData/RAR/reviewsList.json';
import './RAR.scss';

const url = 'http://3.134.102.30';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: {},
    };
  }

  async componentDidMount() {
    const { productId } = this.props;
    const getProductDetails = await axios.get(`${url}/products/${productId}`);
    this.setState({
      productDetails: getProductDetails.data,
    });
    // if (this.state.data.length === 0) {
    //   this.setState({
    //     showReviewList: false,
    //   });
    // }
  }

  render() {
    return (
      <div className="ratingsComp">
        Ratings and Reviews
        <br />
        <br />
        <div className="rar">
          <ReviewBreakdown
            data={this.state.data}
            productId={this.props.productId}
            className="reviewColumn"
          />
          <ReviewList
            productDetails={this.state.productDetails}
            productId={this.props.productId}
            className="reviewColumn"
            showReviewList={this.state.showReviewList}
          />
          <br />
        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;

// things to take in a review list
// the review graphic on the sideß
// teakes in new review
