import React from 'react';

function ThumbNailView(props) {
  const { image } = props;
  const { changeIndex } = props;
  const { changeImage } = props;
  const { index } = props;

  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <div
      role="button"
      className="thumbnailImage"
      style={styles}
      onKeyPress={() => changeImage(image)}
      onClick={function() {
        changeIndex(index);
        changeImage(image);
      }}
      tabIndex={0}
      aria-label="yes"
    />
  );
}

export default ThumbNailView;
