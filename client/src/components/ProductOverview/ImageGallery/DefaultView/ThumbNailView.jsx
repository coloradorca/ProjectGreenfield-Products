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
      onKeyPress={(e) => props.changeImage(props.image)}
      onClick={(e) => props.changeImage(props.image)}
      tabIndex={0}
      aria-label="yes"
    />
  );
}

export default ThumbNailView;
