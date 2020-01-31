/* eslint-disable */

// the review List and functionality of the review list goes here
// imprts review tile
import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import NewReview from './NewReview.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewReview: false,
    };
    this.openNewReview = this.openNewReview.bind(this);
    this.closeNewReview = this.closeNewReview.bind(this);
  }

  openNewReview() {
    console.log('clicked');
    this.setState({
      showNewReview: true,
    });
  }

  closeNewReview() {
    this.setState({
      showNewReview: false,
    });
  }

  render() {
    return (
      <div>
        Number of Reviews sorted by
        <select className="reviewFilters">
          <option value="Newest">Newest</option>
          <option value="Helpful">Helpful</option>
          <option value="Relevant">Relevant</option>
        </select>
        <br />
        {this.props.data.map((review) => {
          return <ReviewTile review={review} />;
        })}
        {this.state.reviewShown}
        <button className="moreReviews">More Reviews</button>
        <button
          className="addReview"
          onClick={() => {
            return this.openNewReview();
          }}
        >
          Add a Review +
        </button>
        <NewReview
          showNewReview={this.state.showNewReview}
          closeNewReview={this.closeNewReview}
        />
      </div>
    );
  }
}

export default ReviewList;

// The list should display 2 tiles at a time, if more than 2 review button "More Reviews" appears
// below the list
// does button need to go in main page?
// if < 2 reviews no button to appear or if no more reviews in list
// button displays 2 moew reviews putting new reviews under the ones already generaterd

// list should be scrollable button and sort outside scross

// sort form (dropdown)

// if no reviews, om;ynew review button appears
