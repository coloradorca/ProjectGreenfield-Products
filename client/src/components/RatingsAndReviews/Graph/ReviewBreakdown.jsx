/* eslint-disable no-useless-constructor */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
// the graphical representation of the review
// in the top left corner of module

import React from 'react';
import AverageStar from '../Stars/AverageStar.jsx';
import SideGraph from './SideGraph.jsx';

// const url = 'http://3.134.102.30/reviews';

class ReviewBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      five: 0,
      four: 0,
      three: 0,
      two: 0,
      one: 0,
      recommend: 0,
    };
    // this.makeData = this.makeData.bind(this);
    this.renderRec = this.renderRec.bind(this);
  }

  componentDidMount() {
    this.renderRec();
    let totalReviews = 0;
    let totalFive = 0;
    let totalFour = 0;
    let totalThree = 0;
    let totalTwo = 0;
    let totalOne = 0;
    this.props.data.map((review) => {
      if (review.rating === 5) {
        totalFive += 1;
      } else if (review.rating === 4) {
        totalFour += 1;
      } else if (review.rating === 3) {
        totalThree += 1;
      } else if (review.rating === 2) {
        totalTwo += 1;
      } else if (review.rating === 1) {
        totalOne += 1;
      }
      // eslint-disable-next-line no-return-assign
      totalReviews += 1;
      return totalReviews;
    });
    const fivePercent = (totalFive / totalReviews) * 100;
    const fourPercent = (totalFour / totalReviews) * 100;
    const threePercent = (totalThree / totalReviews) * 100;
    const twoPercent = (totalTwo / totalReviews) * 100;
    const onePercent = (totalOne / totalReviews) * 100;
    this.setState({
      five: fivePercent,
      four: fourPercent,
      three: threePercent,
      two: twoPercent,
      one: onePercent,
    });
  }

  renderRec() {
    let recc = 0;
    this.props.data.map((review) => {
      if (review.recommend === 1) {
        recc += 1;
      }
    });
    const recPercent = (recc / this.props.data.length) * 100;
    this.setState({
      recommend: recPercent,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="breakdownSection">
        <AverageStar data={this.props.data} />
        <div>{this.state.recommend}% of viewers reccomend this product</div>
        <SideGraph
          fivePercent={this.state.five}
          fourPercent={this.state.four}
          threePercent={this.state.three}
          twoPercent={this.state.two}
          onePercent={this.state.one}
        />
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

//  <div className="breakdownRow">

/* <div className="breakdownSide">
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
</div> */
