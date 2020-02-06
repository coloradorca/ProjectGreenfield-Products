/* eslint-disable prefer-template */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import TileStar from './Stars/TileStar.jsx';
import HelpfulClick from './HelpfulClick.jsx';
import ReportReview from './ReportReview.jsx';
import ReviewThumbnail from './ReviewThumbnail.jsx';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  componentDidMount() {
    const newDate = new Date(this.props.review.date);
    const formatDate =
      newDate.getMonth() +
      '-' +
      newDate.getDate() +
      '-' +
      newDate.getFullYear();
    this.setState({
      date: formatDate,
    });
  }

  render() {
    return (
      // star rating
      <div>
        {/* this will eventually go to the star rating page */}
        <div className="topLineTile">
          <div className="productRating">
            <TileStar rating={this.props.review.rating} />
          </div>
          {/* date of review- Month DD, YYYY */}
          <div className="reviewerName">{this.props.review.reviewer_name}</div>
          <div className="reviewDate">{this.state.date}</div>
        </div>
        {/* // review summary */}
        <div className="reviewSummary">{this.props.review.summary}</div>
        {/* // review body */}
        <div className="reviewBody">{this.props.review.body}</div>
        {/* // recommned */}
        <div className="productRecommend">{this.props.review.recommend}</div>
        {/* // reviewer name */}
        {/* // response to review */}
        <div className="thumbnailTile">
          {this.props.review.photos.map((picture) => {
            // console.log(picture);
            return <ReviewThumbnail image={picture} />;
          })}
        </div>
        <div className="sellerResponse">{this.props.review.response}</div>
        {/* // rating helpfulness */}
        <div className="bottomLine">
          <HelpfulClick
            className="helpTile"
            reviewId={this.props.reviewId}
            helpfulness={this.props.review.helpfulness}
          />
          <ReportReview />
        </div>
        <div className="tileLineBreak" />

        <br />
      </div>
    );
  }
}

export default ReviewTile;

// each aspect of the individual review tile goes here

// star rating

// date of review- Month DD, YYYY

// review summary- 1 sentance capped at 60 charecters, bolded above review body

// free form multimedia input submit text (images later_)
// text must be between 50 - 1000 charecters
// by default 250 charecters should display, click on show more button will expand to show all
// countdown in corner to where 50 charecter limit, once reached saus limit reached
// images thumbnails below text

// recommned- the text “I recommend this product” and a checkmark icon will display below the review
// If the reviewer does not recommend the product, nothing will display here.

// reviewer name- username, if email verified purchaser

// response to review -  the review has a corresponding response,
// this should appear below the reviewer name.
// The response should be preceded by the text “Response from seller”,
// and should be visually distinguished from the rest of the review.

// rating helpfulness -  “Yes (#)” and “No (#)”.
// Following “Yes” and “No” will be the count of users that had selected that button.
//  Clicking either link should cast a vote for that selection.    raio buttons
