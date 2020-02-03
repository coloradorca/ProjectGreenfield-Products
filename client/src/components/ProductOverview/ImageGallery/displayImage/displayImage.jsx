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
    const { changeIndex } = this.props;
    const { changeImage } = this.props;
    const { currentImage } = this.props;
    const { openModal } = this.props;
    const { currentStyle } = this.props;

    const styles = {
      backgroundImage: `url(${currentImage})`,
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
          onKeyDown={openModal}
          onClick={openModal}
        >
          <i className="fa fa-arrows-alt" size={70} aria-hidden="true" />
        </div>
        {currentStyle.photos.map((thumb, id) => (
          <ThumbNailView
            changeIndex={changeIndex}
            changeImage={changeImage}
            image={thumb.url}
            index={id}
            key={thumb.url}
          />
        ))}
      </div>
    );
  }
}

export default DisplayImage;
