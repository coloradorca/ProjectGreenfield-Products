import React from 'react';

import './styleSelector.scss';

function CircleImage(props) {
  const styles = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <div
      className="CircleImage"
      style={styles}
      onKeyPress={(e) => console.log(e, props.image)}
      onClick={(e) => console.log(e, props.image)}
      role="button"
      tabIndex={0}
      aria-label="Save"
    />
  );
}

export default CircleImage;
