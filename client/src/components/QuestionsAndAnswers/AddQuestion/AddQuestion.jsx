/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './AddQuestion.scss';
import axios from 'axios';

// const url = 'http://3.134.102.30/qa';

ReactModal.setAppElement(document.getElementById('app'));

export default class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      value: '',
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleSubmit = (event) => {
    const { value } = this.state;
    console.log(`A question was submitted: ${value}`);
    axios.post(); // /qa/:product_id
    event.preventDefault();
  };

  handleChange = (event) => {
    const { value } = this.state;
    console.log(value);
    this.setState({ value: event.target.value });
  };

  render() {
    const { modalIsOpen, value } = this.state;
    const { productDetails } = this.props;

    return (
      <span>
        <button
          type="button"
          className="addQuestionButton"
          onClick={() => this.openModal()}
        >
          ADD A QUESTION +
        </button>
        <div>
          <ReactModal
            isOpen={modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            className="Modal"
            overlayClassName="Overlay"
            // style={customStyles}
            contentLabel="Add Question Modal"
          >
            <div>
              <button
                type="button"
                className="closeModalButton"
                onClick={this.closeModal}
              >
                X
                <br />
              </button>
            </div>
            <div>
              <h4 className="questionModalHeading">Ask your Question</h4>
              <span>{`About the ${productDetails.name}`}</span>
              <div>
                <form
                  className="addAnswerForm"
                  onSubmit={() => this.handleSubmit()}
                >
                  <label>*Your Question</label>
                  <br />
                  <textarea
                    placeholder="Why did you like the product or not?"
                    rows="5"
                    cols="50"
                    maxLength="1000"
                    value={value}
                    onChange={this.handleChange}
                    required
                  />
                  <br />
                  <label>
                    *What is your nickname?
                    <input
                      type="text"
                      placeholder="Example: jackson11!"
                      size="20"
                      maxLength="60"
                      required
                    />
                    <div className="disclaimer">
                      <em>
                        For privacy reasons, do not use your full name or email
                        address
                      </em>
                    </div>
                  </label>
                  <label>
                    *Your email:
                    <input
                      type="email"
                      pattern=".+.com"
                      placeholder="Example: jack@email.com"
                      size="25"
                      maxLength="60"
                      required
                    />
                    <div className="disclaimer">
                      <em>
                        For authentication reasons, you will not be emailed
                      </em>
                    </div>
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </ReactModal>
        </div>
      </span>
    );
  }
}

// export default AddAnswer;
