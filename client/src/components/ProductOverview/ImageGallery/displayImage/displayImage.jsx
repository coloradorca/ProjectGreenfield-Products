import React from 'react';
import './displayImage.scss';
import styles from '../../sampleData/styles';
import ThumbNailView from '../DefaultView/ThumbNailView.jsx';

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inlaid: this.props.currentStyle,
      // //below taken from default view
      // // photos: this.props.images.photos,
      // currentIndex: 0,
      // translateValue: 0,
      // // currentImage: this.props.images.photos[0].url,
    };
  }

  render() {
    // console.log('images in displayImage', this.props.currentImage);
    const styles = {
      backgroundImage: `url(${this.props.currentImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };
    return (
      <div role="button" tabIndex="0" className="displayImage" style={styles}>
        <div
          role="button"
          tabIndex={0}
          className="imageViewButton "
          onKeyDown={this.props.openModal}
          onClick={this.props.openModal}
        >
          <i className="fa fa-arrows-alt" size={70} aria-hidden="true" />
        </div>
        {this.props.currentStyle.photos.map((thumb, id) => (
          <ThumbNailView
            changeImage={this.props.changeImage}
            image={thumb.url}
            key={id}
          />
        ))}
      </div>
    );
  }
}

export default DisplayImage;

/* </div>
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
    </div> */
