/* eslint-disable class-methods-use-this */
import React from 'react';
import ReviewList from './ReviewList.jsx';
import exampleData from '/Users/Savi/Desktop/ProjectGreenfield/sampleData/RAR/reviewsList.json';
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
        <ReviewList data={this.state.data} />
      </div>
    );
  }
}

export default RatingsAndReviews;

// things to take in a review list
// the review graphic on the sideß
// teakes in new review
