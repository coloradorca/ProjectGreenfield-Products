// /* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from '../sampleData/styles';
import RightArrow from './DefaultView/rightArrow.jsx';
import LeftArrow from './DefaultView/leftArrow.jsx';
import DisplayExpanded from './DisplayExpanded.jsx';
import './DefaultView/DefaultView.scss';

class ModalDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.gallery.photos,
      currentIndex: 0,
      translateValue: 0,
      currentImage: undefined,
    };
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.slideWidth = this.slideWidth.bind(this);
  }

  slideWidth() {
    return document.querySelector('.displayImage').clientWidth;
  }

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
          {this.state.photos.map((image, i) => (
            <DisplayExpanded key={i} image={image.url} />
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

export default ModalDisplay;
