// /* eslint-disable react/destructuring-assignment */
import React from 'react';

import styles from '../../sampleData/styles';

import DisplayImage from '../displayImage/displayImage.jsx';

import '../Slider/Slider.scss';

class DefaultView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: styles[0].results[0].photos,
      currentIndex: 0,
      translateValue: 0,
      currentImage: undefined,
    };

    this.slideWidth = this.slideWidth.bind(this);
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
      currentIndex: selectedImageIndex,
      currentImage: imgUrl,
    }));
  }

  render() {
    return (
      <div className="slider">
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

// (!this.state.currentImage &&
//   this.state.photos.map((image, i) => (
//     <DisplayImage
//       openModal={this.props.openModal}
//       displayCurrent={this.displayCurrent}
//       key={i}
//       image={image.url}
//     />
//   ))) || (
