import React from 'react';
import './displayImage/displayImage.scss';

import {
  GlassMagnifier,
  MOUSE_ACTIVATION,
  SideBySideMagnifier,
  MagnifierContainer,
  MagnifierPreview,
  MagnifierZoom,
} from 'react-image-magnifiers';

class DisplayExpanded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      magnified: true,
      styled: {
        backgroundImage: `url(${this.props.currentImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    };
    this.change = this.change.bind(this);
  }

  change() {
    const { magnified } = this.state;
    this.setState({
      magnified: !magnified,
    });
  }

  changeStyle() {
    this.setState({
      styled: {
        backgroundImage: 'none',
      },
    });
  }

  render() {
    const { currentImage } = this.props;
    const { magnified } = this.state;
    let styled = {
      // backgroundImage: `${(magnified) =>
      //   magnified ? 'url'(currentImage) : 'none'}`,
      // backgroundSize: `${(magnified) => (magnified ? 'contain' : 'cover')}`,
      backgroundImage: `url(${currentImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };

    return (
      <div
        className="displayImage  displayImageModal"
        style={styled}
        role="button"
        tabIndex="0"
        onClick={() => {
          this.change();
          // styled.backgroundImage = 'none';
        }}
        onKeyPress={function() {
          this.change();
        }}
      >
        {!magnified && (
          <div>
            <GlassMagnifier
              className="magnified"
              magnifierSize="50%"
              square
              imageSrc={currentImage}
              imageAlt="Modal Image"
              allowOverflow={false}
              style={{
                cursor: 'pointer',
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default DisplayExpanded;
