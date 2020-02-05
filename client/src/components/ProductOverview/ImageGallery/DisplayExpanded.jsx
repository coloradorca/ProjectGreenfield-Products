import React from 'react';
import './displayImage/displayImage.scss';

import {
  GlassMagnifier,
  MOUSE_ACTIVATION,
  SideBySideMagnifier,
} from 'react-image-magnifiers';

class DisplayExpanded extends React.Component {
  // function DisplayExpanded(props) {
  constructor(props) {
    super(props);
    this.state = {
      magnified: true,
      styled: {},
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
  // background: ${props => (props.checked ? 'salmon' : 'papayawhip')}

  render() {
    const { currentImage } = this.props;
    const { magnified } = this.state;
    const styled = {
      backgroundImage: `url(${currentImage})`,
      // backgroundImage: `${() => (magnified ? 'url'(currentImage) : 'none')}`,
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
        onClick={() => this.change()}
        onKeyPress={function() {
          this.change();
        }}
      >
        {!magnified && (
          <GlassMagnifier
            className="magnified"
            magnifierSize="50%"
            square
            imageSrc={currentImage}
            imageAlt="Example"
            largeImageSrc={currentImage}
            allowOverflow={false}
            // style={{ backgroundImage: 'none', cursor: 'zoom-out' }}
          />
        )}
      </div>
    );
  }
}

export default DisplayExpanded;
