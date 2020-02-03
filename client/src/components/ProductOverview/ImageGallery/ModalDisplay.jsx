// /* eslint-disable react/destructuring-assignment */
import React from 'react';
import RightArrow from './DefaultView/rightArrow.jsx';
import LeftArrow from './DefaultView/leftArrow.jsx';
import DisplayExpanded from './DisplayExpanded.jsx';
import './DefaultView/DefaultView.scss';

class ModalDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.gallery,
      currentIndex: this.props.currentIndex,
      currentImage: this.props.currentImage,
      // currentImage: this.state.photos[this.state.currentIndex].url,
    };
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     // currentImage: this.state.photos[this.state.currentIndex].url,
  //   });
  // }

  goToPreviousSlide() {
    if (this.state.currentIndex !== 0) {
      this.setState(
        (prevState) => ({
          currentIndex: prevState.currentIndex - 1,
        }),
        () =>
          this.setState({
            currentImage: this.state.photos[this.state.currentIndex].url,
          }),
      );
    }
  }

  goToNextSlide() {
    if (this.state.currentIndex === this.state.photos.length - 1) {
      this.setState({
        currentIndex: 0,
      });
    }
    this.setState(
      (prevState) => ({
        currentIndex: prevState.currentIndex + 1,
      }),
      () =>
        this.setState({
          currentImage: this.state.photos[this.state.currentIndex].url,
        }),
    );
  }

  render() {
    console.log(this.state.currentIndex);
    return (
      <div className="DefaultView">
        <div className="slideWrap">
          <DisplayExpanded currentImage={this.state.currentImage} />
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
