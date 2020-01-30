import React from 'react';
import CircleImage from './CircleImage.jsx';
import styles from '../sampleData/styles';

import './styleSelector.scss';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: styles[0].results[1].photos,
    };
  }

  render() {
    return (
      <div className="styleSelector">
        Style Selector
        {this.state.images.map((element, i) => {
          // console.log(element.url);
          return <CircleImage image={element.url} key={i} />;
        })}
      </div>
    );
  }
}

export default StyleSelector;
