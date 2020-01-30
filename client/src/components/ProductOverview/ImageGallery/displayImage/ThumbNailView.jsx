import React from 'react';

function ThumbNailView(props) {
  // console.log(props.image);
  const styles = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <div
      className="thumbnailImage"
      style={styles}
      onKeyPress={(e) => props.displayCurrent(e, props.image)}
      onClick={(e) => props.displayCurrent(e, props.image)}
      role="button"
      tabIndex={0}
      aria-label="Save"
    />
  );
}

export default ThumbNailView;
