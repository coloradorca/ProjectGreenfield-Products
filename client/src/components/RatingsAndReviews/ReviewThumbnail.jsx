/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class ReviewThumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image } = this.props;
    const imageStyle = {
      backgroundImage: `url(${this.props.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };
    console.log({ image });
    return (
      <div className="reviewThumbnail">
        <div className="reviewTileImages" style={imageStyle} />
      </div>
    );
  }
}

export default ReviewThumbnail;
