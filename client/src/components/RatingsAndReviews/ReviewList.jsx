/* eslint-disable */

// the review List and functionality of the review list goes here
// imprts review tile
import React from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import NewReview from './NewReview.jsx';
const url = 'http://3.134.102.30/reviews';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showNewReview: false,
      reviewShown: [],
      reviewSplitNum: 0,
      data: [],
      selectedValue: 'Newest',
    };
    this.moreReviews = this.moreReviews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadList = this.loadList.bind(this);
    // this.addToData = this.addToData.bind(this);
  }

  async componentDidMount() {
    const { productId } = this.props;
    try {
      const getReviews = await axios.get(`${url}/${productId}/list`);
      this.setState({
        data: getReviews.data,
      });
      this.loadList();
    } catch (error) {
      console.log(error);
    }
  }

  // componentDidUpdate() {
  //   const sortArr = this.state.data.slice(0, 2);
  //   this.setState({
  //     reviewShown: this.state.reviewShown.concat(sortArr),
  //     reviewSplitNum: this.state.reviewSplitNum + 2,
  //   });
  // }

  loadList() {
    const listArr = this.state.data.results.slice(
      this.state.reviewSplitNum,
      this.state.reviewSplitNum + 2,
    );
    this.setState({
      reviewShown: this.state.reviewShown.concat(listArr),
      reviewSplitNum: this.state.reviewSplitNum + 2,
    });
  }

  handleChange(e) {
    this.setState(
      {
        selectedValue: e.target.value,
      },
      () => {
        console.log(this.state.selectedValue);
      },
    );
    this.sortList();
  }

  moreReviews(e) {
    e.preventDefault();
    const addArr = this.state.data.results.slice(
      this.state.reviewSplitNum,
      this.state.reviewSplitNum + 2,
    );
    this.setState({
      reviewShown: this.state.reviewShown.concat(addArr),
      reviewSplitNum: this.state.reviewSplitNum + 2,
    });
  }

  sortList() {
    //use the api call to change the order of the list
  }

  render() {
    console.log(this.state.data);
    // this.addToData();
    if (this.props.showReviewList === false) {
      return null;
    }
    return (
      <div>
        Number of Reviews sorted by
        <select
          className="reviewFilters"
          value={this.state.selectedValue}
          onChange={this.handleChange}
        >
          <option value="Newest">Newest</option>
          <option value="Helpful">Helpful</option>
          <option value="Relevant">Relevant</option>
        </select>
        <br />
        {this.state.reviewShown.map((review) => {
          return <ReviewTile review={review} reviewId={review.review_id} />;
        })}
        <button
          className="moreReviews"
          onClick={(e) => {
            this.moreReviews(e);
          }}
        >
          More Reviews
        </button>
        {/* <button
          className="addReview"
          onClick={() => {
            return this.openNewReview();
          }}
        >
          Add a Review +
        </button> */}
        <NewReview
          newReview={this.newReview}
          // showNewReview={this.state.showNewReview}
          // closeNewReview={this.closeNewReview}
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
