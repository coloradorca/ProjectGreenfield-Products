import React from 'react';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hi</div>;
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
