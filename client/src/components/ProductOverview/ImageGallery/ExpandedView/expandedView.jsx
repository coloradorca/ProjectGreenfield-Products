import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import Slider from '../Slider/Slider.jsx';
import DisplayImage from '../displayImage/displayImage.jsx';

import DefaultView from '../DefaultView/defaultView.jsx';

import './expandedView.scss';

class ExpandedView extends React.Component {
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
          {/* below where <Slider/> is now, create a new component  that will serve as the expanded view with zoom */}
          <div className="sliderModal">
            <Slider openModal={this.onOpenModal} />
          </div>
        </Modal>
        {/* keep this as the (DefaultView) */}
        <Slider openModal={this.onOpenModal} />
      </div>
    );
  }
}

export default ExpandedView;
