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

class ReviewBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewArr: [],
    };
    // this.makeData = this.makeData.bind(this);
  }

  componentDidMount() {
    console.log('hi');
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
    const emptyArr = [];
    const fiveArr = emptyArr.concat(totalFive);
    const fourArr = fiveArr.concat(totalFour);
    const threeArr = fourArr.concat(totalThree);
    const twoArr = threeArr.concat(totalTwo);
    const oneArr = twoArr.concat(totalOne);
    const finalArr = oneArr.concat(totalReviews);
    this.setState(
      {
        reviewArr: finalArr,
      },
      () => {
        return console.log(this.state.reviewArr);
      },
    );
  }

  // makeData() {
  //   let totalReviews = 0;
  //   let totalFive = 0;
  //   let totalFour = 0;
  //   let totalThree = 0;
  //   let totalTwo = 0;
  //   let totalOne = 0;

  //   this.props.data.map((review) => {
  //     if (review.rating === 5) {
  //       totalFive += 1;
  //     } else if (review.rating === 4) {
  //       totalFour += 1;
  //     } else if (review.rating === 3) {
  //       totalThree += 1;
  //     } else if (review.rating === 2) {
  //       totalTwo += 1;
  //     } else if (review.rating === 1) {
  //       totalOne += 1;
  //     }
  //     // eslint-disable-next-line no-return-assign
  //     totalReviews += 1;
  //     return totalReviews;
  //   });
  //   const emptyArr = [];
  //   const fiveArr = emptyArr.concat(totalFive);
  //   const fourArr = fiveArr.concat(totalFour);
  //   const threeArr = fourArr.concat(totalThree);
  //   const twoArr = threeArr.concat(totalTwo);
  //   const oneArr = twoArr.concat(totalOne);
  //   const finalArr = oneArr.concat(totalReviews);
  //   return this.setState(
  //     {
  //       reviewArr: finalArr,
  //     },
  //     () => console.log(this.state.reviewArr),
  //   );
  // }

  render() {
    return (
      // star rating
      <div className="breakdownSection">
        <AverageStar data={this.props.data} />
        <div>{this.state.recommend}% of viewers reccomend this product</div>
        {/* <SideGraph reviewArr={this.state.reviewArr} /> */}
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
