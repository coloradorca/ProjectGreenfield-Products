/* eslint-disable  */
import React from 'react';
import CircleImage from './CircleImage.jsx';

import './styleSelector.scss';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: '',
      selected: '',
      checkedCircle: undefined,
    };
    this.updateStyle = this.updateStyle.bind(this);
    this.indicateSelected = this.indicateSelected.bind(this);
  }

  componentDidMount() {
    const { styles } = this.props;
    this.setState({
      images: styles,
      selected: styles[0].name,
    });
  }

  updateStyle(e, styleImage) {
    const { images } = this.state;
    const { changeStyle } = this.props;
    e.preventDefault();
    for (let i = 0; i < images.length; i += 1) {
      if (images[i].photos[0].url === styleImage) {
        changeStyle(images[i]);

        this.setState({
          selected: images[i].name,
        });
      }
    }
  }

  indicateSelected(num) {
    this.setState({
      checkedCircle: num,
    });
  }

  render() {
    const { checkedCircle, selected, images } = this.state;
    const { changeStyle, changeImage } = this.props;
    if (images) {
      return (
        <div className="styleSelectorContainer">
          <div className="styleSelectorText">Style > {selected}</div>
          <br />
          <div className="smallImages">
            {images.map((element, i) => {
              return (
                <CircleImage
                  indicateSelected={this.indicateSelected}
                  checkedCircle={checkedCircle}
                  changeImage={changeImage}
                  updateStyle={this.updateStyle}
                  changeStyle={changeStyle}
                  updateSelected={this.updateSelected}
                  image={element.photos[0].url}
                  key={element.photos[0].url}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      );
    }
    return null;
  }
}

export default StyleSelector;
