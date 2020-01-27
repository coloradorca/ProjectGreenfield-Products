/* eslint-disable class-methods-use-this */
import React from 'react';
import ReviewList from './ReviewList.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4],
    };
  }

  render() {
    return (
      <div className="RAR">
        Ratings And Reviews
        {this.props.data.map((review) => {
          return <ReviewList review={review} />;
        })}
      </div>
    );
  }
}

export default RatingsAndReviews;

// things to take in a review list
// the review graphic on the sideß
// teakes in new review
