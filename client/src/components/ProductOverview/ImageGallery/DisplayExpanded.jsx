import React from 'react';
import './displayImage/displayImage.scss';

function DisplayExpanded(props) {
  const { currentImage } = props;
  const styled = {
    backgroundImage: `url(${currentImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return <div className="displayImage" style={styled} />;
}

export default DisplayExpanded;
