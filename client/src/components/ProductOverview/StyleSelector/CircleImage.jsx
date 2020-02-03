import React from 'react';

import './styleSelector.scss';

function CircleImage(props) {
  const imageStyles = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <div
      className="CircleImage"
      style={imageStyles}
      onKeyPress={(e) => props.updateStyle(e, props.image)}
      // onClick={(e) => props.updateStyle(e, props.image)}
      onClick={function(e) {
        props.updateStyle(e, props.image);
        props.changeImage(props.image);
      }}
      role="button"
      tabIndex={0}
      aria-label="Save"
    />
  );
}

export default CircleImage;
