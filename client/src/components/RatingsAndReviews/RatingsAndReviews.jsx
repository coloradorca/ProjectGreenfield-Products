/* eslint-disable class-methods-use-this */
import React from 'react';
import ReviewList from './ReviewList.jsx';
import NewReview from './NewReview.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import exampleData from '../../../../sampleData/RAR/reviewsList.json';
import './RAR.scss';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: exampleData.results,
    };
  }

  render() {
    return (
      <div className="RAR">
        Ratings And Reviews
        <ReviewBreakdown data={this.state.data} />
        <ReviewList data={this.state.data} />
        <br />
        <NewReview />
      </div>
    );
  }
}

export default RatingsAndReviews;

// things to take in a review list
// the review graphic on the sideß
// teakes in new review
