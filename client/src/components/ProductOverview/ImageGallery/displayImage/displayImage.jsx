import React from 'react';

import './displayImage.scss';

function DisplayImage({ image }) {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return <div className="displayImage" style={styles} />;
}

export default DisplayImage;
