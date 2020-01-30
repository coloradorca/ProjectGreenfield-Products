/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// take all ratings and average them then put in stars reviews

import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class AverageStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      averageRating: '',
    };
    this.getAverage = this.getAverage.bind(this);
  }

  componentDidMount() {
    console.log(this.state.averageRating);
    return this.getAverage();
  }

  getAverage() {
    const arr = [];
    this.props.data.map((review) => {
      return arr.push(review.rating);
    });
    let sum = 0;
    this.props.data.map((review) => {
      sum += review.rating;
      return sum;
    });
    const average = Math.floor(sum / arr.length);
    console.log(average);
    this.setState({
      averageRating: average,
    });
  }

  // this.props.rating => for immported stars
  // need to make on click for not clicked stars

  render() {
    return (
      <StarRatingComponent
        name="tileStar"
        editing={false}
        starCount={5}
        value={this.state.averageRating}
      />
    );
  }
}

export default AverageStar;
