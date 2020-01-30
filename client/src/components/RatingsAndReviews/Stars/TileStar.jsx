/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// so take in the rating and fill in the number of stars

import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class TileStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      rating: this.props.rating,
    };
  }

  // this.props.rating => for immported stars
  // need to make on click for not clicked stars

  render() {
    return (
      <div>
        <StarRatingComponent
          name="tileStar"
          editing={false}
          starCount={5}
          value={this.props.rating}
        />
      </div>
    );
  }
}

export default TileStar;
