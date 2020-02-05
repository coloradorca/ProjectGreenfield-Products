import React from 'react';
import './displayImage.scss';
import ThumbNailView from '../DefaultView/ThumbNailView.jsx';

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedThumb: undefined,
    };
    this.indicateSelected = this.indicateSelected.bind(this);
  }

  indicateSelected(num) {
    this.setState({
      checkedThumb: num,
    });
  }

  render() {
    const {
      changeIndex,
      changeImage,
      currentImage,
      openModal,
      currentStyle,
    } = this.props;

    const { checkedThumb } = this.state;

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
        <div className="thumbnails">
          {currentStyle.photos.map((thumb, id) => (
            <ThumbNailView
              indicateSelected={this.indicateSelected}
              checkedThumb={checkedThumb}
              changeIndex={changeIndex}
              changeImage={changeImage}
              image={thumb.url}
              index={id}
              key={thumb.url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayImage;
