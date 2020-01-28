import React from 'react';
import ReactDOM from 'react-dom';

import Slider from './Slider.jsx';

import './Slider.scss';

function LeftArrow(props) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="backArrow arrow"
      onKeyDown={props.goToPreviousSlide}
      onClick={props.goToPreviousSlide}
    >
      <i className="fa fa-arrow-left fa-2x" />
    </div>
  );
}

export default LeftArrow;
