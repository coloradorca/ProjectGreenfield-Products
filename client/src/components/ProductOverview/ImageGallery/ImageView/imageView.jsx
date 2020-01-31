import React from 'react';
import Modal from 'react-responsive-modal';
import DefaultView from '../DefaultView/DefaultView.jsx';
import ModalDisplay from '../ModalDisplay.jsx';

import './imageView.scss';

class ImageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
    // console.log(this.props.gallery);
    const { open } = this.state;
    return (
      <div className="modalContainer">
        <Modal
          className="modal"
          open={open}
          onClose={this.onCloseModal}
          contentLabel="Example Modal"
          center
        >
          <div className="DefaultViewModal">
            <ModalDisplay gallery={this.props.gallery} />
          </div>
        </Modal>
        <DefaultView
          changeImage={this.props.changeImage}
          images={this.props.gallery}
          openModal={this.onOpenModal}
        />
      </div>
    );
  }
}

export default ImageView;
