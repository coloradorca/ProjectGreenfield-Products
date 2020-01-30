// /* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from '../../sampleData/styles';
import DisplayImage from '../displayImage/displayImage.jsx';

import './DefaultView.scss';

class DefaultView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: styles[0].results[0].photos,
      currentIndex: 0,
      translateValue: 0,
      currentImage: styles[0].results[0].photos[0].url,
    };
    this.displayCurrent = this.displayCurrent.bind(this);
  }

  displayCurrent(e, imgUrl) {
    e.preventDefault();
    let selectedImageIndex = 0;
    this.state.photos.forEach((element, index) => {
      if (element.url === imgUrl) {
        selectedImageIndex = index;
      }
      return selectedImageIndex;
    });
    this.setState((prevState) => ({
      // currentIndex: selectedImageIndex,
      currentImage: imgUrl,
    }));
  }

  render() {
    return (
      <div className="DefaultView">
        <div
          className="slideWrap"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          <DisplayImage
            openModal={this.props.openModal}
            image={this.state.currentImage}
            displayCurrent={this.displayCurrent}
          />
        </div>
      </div>
    );
  }
}

export default DefaultView;
