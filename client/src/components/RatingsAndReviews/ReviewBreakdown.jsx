/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
// the graphical representation of the review
// in the top left corner of module

import React from 'react';
import AverageStar from './Stars/AverageStar.jsx';

class ReviewBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneStar: 0,
      twoStar: 0,
      threeStar: 0,
      fourStar: 0,
      fiveStar: 0,
      recommend: 0,
      totalReviews: 0,
    };
    this.reviewPercent = this.reviewPercent.bind(this);
  }
  // this.props.data
  // this might need to be redux related

  reviewPercent() {
    this.props.data.map((review) => {
      if (review.rating === 5) {
        this.setState((prevState) => {
          return {
            fiveStar: prevState.fiveStar + 1,
            totalReviews: prevState.totalReviews + 1,
          };
        });
      } else if (review.rating === '4') {
        this.setState({
          fourStar: this.state.fourStar + 1,
          totalReviews: this.state.totalReviews + 1,
        });
      } else if (review.rating === '3') {
        this.setState({
          threeStar: this.state.threeStar + 1,
          totalReviews: this.state.totalReviews + 1,
        });
      } else if (review.rating === '2') {
        this.setState({
          twoStar: this.state.twoStar + 1,
          totalReviews: this.state.totalReviews + 1,
        });
      } else if (review.rating === '1') {
        this.setState({
          oneStar: this.state.oneStar + 1,
          totalReviews: this.state.totalReviews + 1,
        });
      }
    });
    this.props.data.map((rating) => {
      if (rating.recommend === 'yes') {
        this.setState((prevState) => {
          return { recommend: prevState.reccomend + 1 };
        });
      }
    });
    console.log(this.state);
    this.setState((prevState) => {
      return {
        fiveStar: Math.floor(prevState.fiveStar / prevState.totalReviews) * 100,
        fourStar: Math.floor(prevState.fourStar / prevState.totalReviews) * 100,
        threeStar:
          Math.floor(prevState.threeStar / prevState.totalReviews) * 100,
        twoStar: Math.floor(prevState.twoStar / prevState.totalReviews) * 100,
        oneStar: Math.floor(prevState.oneStar / prevState.totalReviews) * 100,
        recommend:
          Math.floor(prevState.recommend / prevState.totalReviews) * 100,
      };
    });
  }

  render() {
    return (
      // star rating
      <div className="breakdownSection">
        <AverageStar data={this.props.data} />
        <div>Average Rating Number goes here</div>
        <div>{this.state.recommend}% of viewers reccomend this product</div>
        <div className="breakdownRow">
          <div className="breakdownSide">
            <div> 5 Star</div>
          </div>
          <div className="breakdownMiddle">
            <div className="breakBarContainer">
              <div className="breakBarFive" />
            </div>
          </div>
          <div className="breakdownSide">
            <div> 4 Star</div>
          </div>
          <div className="breakdownMiddle">
            <div className="breakBarContainer">
              <div className="breakBarFour" />
            </div>
          </div>
          <div className="breakdownSide">
            <div> 3 Star</div>
          </div>
          <div className="breakdownMiddle">
            <div className="breakBarContainer">
              <div className="breakBarThree" />
            </div>
          </div>
          <div className="breakdownSide">
            <div> 2 Star</div>
          </div>
          <div className="breakdownMiddle">
            <div className="breakBarContainer">
              <div className="breakBarTwo" />
            </div>
          </div>
          <div className="breakdownSide">
            <div> 1 Star</div>
          </div>
          <div className="breakdownMiddle">
            <div className="breakBarContainer">
              <div className="breakBarOne" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewBreakdown;

// ratings summary with the stars
// see grpahical
// the stars as a whole should appear
// under that breakdown graph
// for % that has been attributed to each star fill in green and the rest of bar to be left gray
// clicking on a star will only show reviews in list for reviews with that rating
// should be additiive, toggled with an on and off click

// under initial stars % with recomnennded appears

// product breakdown scale-> look on page
