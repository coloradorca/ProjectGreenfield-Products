import React from 'react';

import './DefaultView.scss';

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
