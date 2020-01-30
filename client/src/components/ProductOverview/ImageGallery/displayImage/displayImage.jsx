import React from 'react';
import './displayImage.scss';
import styles from '../../sampleData/styles';
import ThumbNailView from '../DefaultView/ThumbNailView.jsx';

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inlaid: styles[0].results[0].photos,
    };
  }

  render() {
    const styles = {
      backgroundImage: `url(${this.props.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };
    return (
      <div role="button" tabIndex="0" className="displayImage" style={styles}>
        <div
          role="button"
          tabIndex={0}
          className="imageViewButton "
          onKeyDown={this.props.openModal}
          onClick={this.props.openModal}
        >
          <i className="fa fa-arrows-alt" size={70} aria-hidden="true" />
        </div>
        {this.state.inlaid.map((thumb, id) => (
          <ThumbNailView
            onClick={(e) => this.props.displayCurrent(e, this)}
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
