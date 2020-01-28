// /* eslint-disable react/destructuring-assignment */
import React from 'react';

import styles from '../../sampleData/styles';

import DisplayImage from '../displayImage/displayImage.jsx';
import RightArrow from './rightArrow.jsx';
import LeftArrow from './leftArrow.jsx';

import './Slider.scss';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: styles[0].results[0].photos,
      currentIndex: 0,
      translateValue: 0,
      currentImage: undefined,
    };
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.slideWidth = this.slideWidth.bind(this);
    this.displayCurrent = this.displayCurrent.bind(this);
  }

  slideWidth() {
    return document.querySelector('.displayImage').clientWidth;
  }

  // reducer function will eventually take place of these funcs
  goToPreviousSlide() {
    if (this.state.currentIndex !== 0) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth(),
        currentImage: undefined,
      }));
    }
  }

  goToNextSlide() {
    if (this.state.currentIndex === this.state.photos.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }
    return this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
      currentImage: undefined,
    }));
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
      <div className="slider">
        <div
          className="slideWrap"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          {(!this.state.currentImage &&
            this.state.photos.map((image, i) => (
              <DisplayImage
                displayCurrent={this.displayCurrent}
                key={i}
                image={image.url}
              />
            ))) || (
            <DisplayImage
              image={this.state.currentImage}
              displayCurrent={this.displayCurrent}
            />
          )}
        </div>
        {this.state.currentIndex !== 0 && (
          <LeftArrow goToPreviousSlide={this.goToPreviousSlide} />
        )}
        {this.state.currentIndex !== this.state.photos.length - 1 && (
          <RightArrow goToNextSlide={this.goToNextSlide} />
        )}
      </div>
    );
  }
}

export default Slider;
