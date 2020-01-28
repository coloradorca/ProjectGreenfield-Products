import React from 'react';

import './displayImage.scss';

import styles from '../../sampleData/styles';

import ThumbNailView from './ThumbNailView.jsx';

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inlaid: styles[0].results[0].photos,
    };
  }

  render() {
    // console.log(this.state.inlaid);
    const styles = {
      backgroundImage: `url(${this.props.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };
    return (
      <div className="displayImage" style={styles}>
        {this.state.inlaid.map((thumb, id) => (
          <ThumbNailView
            // onClick={(e) => this.props.displayCurrent(e, this)}
            displayCurrent={this.props.displayCurrent}
            image={thumb.url}
            key={id}
          />
        ))}
      </div>
    );
  }
}

export default DisplayImage;

// function DisplayImage({ image }) {
//   const styles = {
//     backgroundImage: `url(${image})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//   };
//   return <div className="displayImage" style={styles} />;
// }
