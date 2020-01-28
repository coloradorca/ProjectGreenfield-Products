// /* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';

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
    };
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.slideWidth = this.slideWidth.bind(this);
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
    }));
  }

  render() {
    console.log(this.state.photos.length);
    return (
      <div className="slider">
        <div
          className="slideWrap"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          {this.state.photos.map((image, i) => (
            <DisplayImage key={i} image={image.thumbnail_url} />
          ))}
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
