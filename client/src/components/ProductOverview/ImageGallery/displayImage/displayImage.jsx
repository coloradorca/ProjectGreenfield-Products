import React from 'react';
import './displayImage.scss';
import ThumbNailView from '../DefaultView/ThumbNailView.jsx';

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            changeIndex={this.props.changeIndex}
            changeImage={this.props.changeImage}
            image={thumb.url}
            index={id}
            key={id}
          />
        ))}
      </div>
    );
  }
}

export default DisplayImage;
