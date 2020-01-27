import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../../sampleData/styles.js';

function RightArrow(props) {
  return <div className="RightArrow" onClick={props.goToNextSlide}></div>;
}

export default RightArrow;
