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

const url = 'http://3.134.102.30/reviews';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 2,
      data: exampleData.results,
    };
    this.newReview = this.newReview.bind(this);
  }

  // componentDidMount() {
  //   // const { product } = this.state;
  //   axios.get(`${url}/${this.state.product}/list`).then((res) => {
  //     const getReviews = res.data;
  //     this.setState({
  //       data: { getReviews },
  //     });
  //   });
  //   if (this.state.data.length === 0) {
  //     this.setState({
  //       showReviewList: false,
  //     });
  //   }
  // }

  newReview(e) {
    // e.preventDefault();
    const { product } = this.state;
    const postReview = axios.post(`${url}/reviews/${product}`);
    this.setState((prevState) => {
      return {
        data: [...prevState.data, postReview],
      };
    });
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
            productId={this.state.product}
            className="reviewColumn"
          />
          <ReviewList
            data={this.state.data}
            productId={this.state.product}
            className="reviewColumn"
            showReviewList={this.state.showReviewList}
            newReview={this.newReview}
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
