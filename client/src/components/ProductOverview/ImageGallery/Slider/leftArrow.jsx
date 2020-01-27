import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../../sampleData/styles.js';

function LeftArrow(props) {
  return <div className="leftArrow" onClick={props.goToPreviousSlide} />;
}

export default LeftArrow;
