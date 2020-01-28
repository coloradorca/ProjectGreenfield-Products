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
      onClick={(e) => props.displayCurrent(e, props.image)}
    />
  );
}

export default ThumbNailView;
