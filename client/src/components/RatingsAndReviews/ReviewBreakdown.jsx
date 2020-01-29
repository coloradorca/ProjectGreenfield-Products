// the graphical representation of the review
// in the top left corner of module

import React from 'react';

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
  //this.props.data
  //this might need to be redux related
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

  componentDidMount() {
    console.log(this.state);
    this.reviewPercent();
  }

  render() {
    return (
      // star rating
      <div>
        <div>Stars Go Here</div>
        <div>Average Rating Number goes here</div>
        <div>{this.state.recommend}% of viewers reccomend this product</div>
        <ul className="breakdownGraph">
          <li className="fiveStarPercent">5</li>
          <li className="fourStarPercent">4</li>
          <li className="threeStarPercent">3</li>
          <li className="twoStarPercent">2</li>
          <li className="oneStarPercent">1</li>
        </ul>
      </div>
    );
  }
}

export default ReviewBreakdown;

//ratings summary with the stars
//see grpahical
//the stars as a whole should appear
//under that breakdown graph
//for % that has been attributed to each star fill in green and the rest of bar to be left gray
//clicking on a star will only show reviews in list for reviews with that rating
//should be additiive, toggled with an on and off click

// under initial stars % with recomnennded appears

// product breakdown scale-> look on page
