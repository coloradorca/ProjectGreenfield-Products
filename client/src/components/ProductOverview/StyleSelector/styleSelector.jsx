import React from 'react';
import CircleImage from './CircleImage.jsx';

import './styleSelector.scss';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.styles,
      selected: this.props.styles[0].name,
      selectedImage: this.props.styles[0].photos[0].thumbnail_url,
    };
    this.updateStyle = this.updateStyle.bind(this);
  }

  updateStyle(e, styleImage) {
    e.preventDefault();
    for (var i = 0; i < this.state.images.length; i++) {
      if (this.state.images[i].photos[0].url === styleImage) {
        this.props.changeStyle(this.state.images[i]);

        this.setState({
          selected: this.state.images[i].name,
        });
      }
    }
  }

  render() {
    return (
      <div className="styleSelectorContainer">
        <div className="styleSelectorText">Style > {this.state.selected}</div>
        <br />
        <div className="smallImages">
          {this.state.images.map((element, i) => {
            return (
              <CircleImage
                changeImage={this.props.changeImage}
                updateStyle={this.updateStyle}
                changeStyle={this.props.changeStyle}
                updateSelected={this.updateSelected}
                image={element.photos[0].url}
                key={i}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default StyleSelector;
