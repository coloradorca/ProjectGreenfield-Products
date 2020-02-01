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
      reviewShown: [],
      reviewSplitNum: 0,
      data: this.props.data,
      selectedValue: 'Newest',
    };
    this.openNewReview = this.openNewReview.bind(this);
    this.closeNewReview = this.closeNewReview.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const listArr = this.state.data.slice(
      this.state.reviewSplitNum,
      this.state.reviewSplitNum + 2,
    );
    this.setState({
      reviewShown: this.state.reviewShown.concat(listArr),
      reviewSplitNum: this.state.reviewSplitNum + 2,
    });
  }

  componentDidUpdate() {
    const sortArr = this.state.data.slice(0, 2);
    this.setState({
      reviewShown: this.state.reviewShown.concat(sortArr),
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
    const addArr = this.state.data.slice(
      this.state.reviewSplitNum,
      this.state.reviewSplitNum + 2,
    );
    this.setState({
      reviewShown: this.state.reviewShown.concat(addArr),
      reviewSplitNum: this.state.reviewSplitNum + 2,
    });
  }

  openNewReview() {
    this.setState({
      showNewReview: true,
    });
  }

  closeNewReview() {
    this.setState({
      showNewReview: false,
    });
  }

  sortList() {
    if (this.state.selectedValue === 'Newest') {
      //sort by newest date
      let newArr = this.state.data.sort((a, b) => {
        return a.date - b.date;
      });
      return this.setState(
        {
          data: newArr,
        },
        () => {
          console.log(this.state.sortedArr);
        },
      );
    } else if (this.state.selectedValue === 'Helpful') {
      //sort by the most helpful => helpfulness
      let helpArr = this.state.data.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
      console.log(helpArr);
      return this.setState(
        {
          data: helpArr,
        },
        () => {
          console.log(this.state.sortedArr);
        },
      );
    }
    // else if (this.state.selectedValue === 'Relevant') {
    //   //sort by the most relevent
    // }
  }

  render() {
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
          return <ReviewTile review={review} />;
        })}
        <button
          className="moreReviews"
          onClick={(e) => {
            this.moreReviews(e);
          }}
        >
          More Reviews
        </button>
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
