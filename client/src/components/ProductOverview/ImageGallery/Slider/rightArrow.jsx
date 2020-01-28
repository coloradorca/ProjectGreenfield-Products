import React from 'react';

import './Slider.scss';

function RightArrow(props) {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={props.goToNextSlide}
      className="nextArrow arrow"
      onClick={props.goToNextSlide}
    >
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
    </div>
  );
}

export default RightArrow;
