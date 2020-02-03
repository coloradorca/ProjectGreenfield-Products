import React from 'react';
import Modal from 'react-responsive-modal';
import ModalDisplay from '../ModalDisplay.jsx';
import DisplayImage from '../displayImage/displayImage.jsx';

import './imageView.scss';
import '../DefaultView/DefaultView.scss';

class ImageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      // currentGallery: this.props.currentStyle.photos,
    };
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
  }

  render() {
    // console.log('images in imageview', this.props.currentStyle.photos);
    const { open } = this.state;
    return (
      <div className="modalContainer">
        <Modal
          className="modal"
          open={open}
          onClose={this.onCloseModal}
          // contentLabel="Example Modal"
        >
          <div className="DefaultViewModal">
            <ModalDisplay
              currentIndex={this.props.currentIndex}
              gallery={this.props.currentStyle.photos}
              currentImage={this.props.currentImage}
            />
          </div>
        </Modal>
        <div className="DefaultView">
          <div className="slideWrap">
            <DisplayImage
              changeIndex={this.props.changeIndex}
              openModal={this.onOpenModal}
              currentImage={this.props.currentImage}
              currentStyle={this.props.currentStyle}
              changeImage={this.props.changeImage}
              changeStyle={this.props.changeStyle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageView;
