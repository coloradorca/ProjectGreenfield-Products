// /* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from '../../sampleData/styles';
import DisplayImage from '../displayImage/displayImage.jsx';

import './DefaultView.scss';

class DefaultView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.images.photos,
      currentIndex: 0,
      translateValue: 0,
      currentImage: this.props.images.photos[0].url,
    };
    this.displayCurrent = this.displayCurrent.bind(this);
    this.changePhotos = this.changePhotos.bind(this);
  }

  componentDidMount() {
    this.setState({
      photos: this.props.images.photos,
      currentImage: this.props.images.photos[0].url,
    });
  }

  componentWillReceiveProps() {
    this.setState({
      photos: this.props.images.photos,
      currentImage: this.props.images.photos[0].url,
    });
  }

  displayCurrent(e, imgUrl) {
    e.preventDefault();
    this.setState((prevState) => ({
      currentImage: imgUrl,
    }));
  }

  changePhotos(e, newPhotos) {
    e.preventDefault();
    this.setState({
      photos: newPhotos,
    });
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
            imageGallery={this.props.images.photos}
            // imageGallery={this.state.photos}
            openModal={this.props.openModal}
            image={this.state.currentImage}
            // image={this.props.images.photos[0].url}
            displayCurrent={this.displayCurrent}
            changePhotos={this.changePhotos}
          />
        </div>
      </div>
    );
  }
}

export default DefaultView;
