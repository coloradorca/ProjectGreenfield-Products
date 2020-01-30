import React from 'react';

function ThumbNailView(props) {
  const styles = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <div
      role="button"
      className="thumbnailImage"
      style={styles}
      onKeyPress={(e) => props.displayCurrent(e, props.image)}
      onClick={(e) => props.displayCurrent(e, props.image)}
      tabIndex={0}
      aria-hidden="true"
    />
  );
}

export default ThumbNailView;
