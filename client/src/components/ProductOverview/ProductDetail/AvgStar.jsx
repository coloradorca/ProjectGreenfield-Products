// /* eslint-disable */

import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class AverageStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: 4,
      // reviews: 0,
    };
    this.getAverage = this.getAverage.bind(this);
  }

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
    // const average = Math.round(sum / arr.length);
    const average = Math.round((sum / arr.length) * 2) / 2;
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
          <button
            type="button"
            onClick={() =>
              document.getElementById('ratingsComp').scrollIntoView(true)
            }
          >
            {' '}
            Read all {reviewLength} Reviews...{' '}
          </button>
        </div>
      </div>
    );
  }
}

export default AverageStar;

// className = "ratingsComp"
