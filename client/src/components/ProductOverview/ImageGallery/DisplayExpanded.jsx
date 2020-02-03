import React from 'react';
import './displayImage/displayImage.scss';
import styles from '../sampleData/styles';

class DisplayExpanded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // inlaid: styles[0].results[0].photos,
    };
  }

  render() {
    const styles = {
      backgroundImage: `url(${this.props.currentImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };
    return <div tabIndex="0" className="displayImage" style={styles}></div>;
  }
}

export default DisplayExpanded;
