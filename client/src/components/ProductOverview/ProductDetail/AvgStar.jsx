// /* eslint-disable */

import React from 'react';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';

import './ProductDetail.scss';

class AverageStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: 4,
      // numReviews: 0,
    };
    this.getAverage = this.getAverage.bind(this);
  }

  // async componentDidMount() {
  //   const ratings = await axios.get(`${url}/reviews/${productId}/list`);
  //   this.setState(
  //     {
  //       numReviews: ratings.data.results.length,
  //     },
  //     () => console.log(ratings.data.results),
  //   );
  // }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.getAverage();
    }
  }

  getAverage() {
    const arr = [];
    this.props.data.results.map((review) => {
      return arr.push(review.rating);
    });
    let sum = 0;
    this.props.data.results.map((review) => {
      sum += review.rating;
      return sum;
    });
    const average = Math.round(sum / arr.length);
    // const average = Math.round((sum / arr.length) * 2) / 2;
    this.setState({
      averageRating: average,
    });
  }

  render() {
    const { reviewLength } = this.props;
    return (
      <div className="ratingAndReviews">
        <div>
          <StarRatingComponent
            name="tileStar"
            editing={false}
            starCount={5}
            value={this.state.averageRating}
            renderStarIcon={(index, value) => {
              return (
                <span>
                  <i
                    className={index <= value ? 'fas fa-star' : 'far fa-star'}
                  />
                </span>
              );
            }}
            renderStarIconHalf={() => {
              return (
                <span>
                  <span style={{ position: 'absolute' }}>
                    <i className="far fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star-half" />
                  </span>
                </span>
              );
            }}
          />
        </div>
        <div className="linkToScroll">
          <a
            type="button"
            onClick={() =>
              document.getElementById('ratingsComp').scrollIntoView(true)
            }
          >
            {' '}
            Read all {reviewLength} Reviews...{' '}
          </a>
        </div>
      </div>
    );
  }
}

export default AverageStar;

// className = "ratingsComp"
