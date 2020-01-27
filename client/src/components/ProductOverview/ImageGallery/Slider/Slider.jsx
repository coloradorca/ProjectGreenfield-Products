import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../../sampleData/styles';

import RightArrow from './rightArrow.jsx';
import LeftArrow from './leftArrow.jsx';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: styles[0].results[0].photos,
      currentIndex: 0,
    };
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  // reducer function will eventually take place of these funcs
  goToPreviousSlide() {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  }

  goToNextSlide() {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  }

  render() {
    console.log(this.state.photos);
    return (
      <div>
        <div className="slider"> This is the Slider component</div>
        <LeftArrow goToPreviousSlide={this.goToPreviousSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}

export default Slider;
