/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './AddAnswer.scss';

ReactModal.setAppElement(document.getElementById('app'));

export default class AddAnswer extends Component {
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
    console.log(`An answer was submitted: ${value}`);
    event.preventDefault();
  };

  handleChange = (event) => {
    const { value } = this.state;
    console.log(value);
    // make api call to submit as a question here
    this.setState({ value: event.target.value });
  };

  render() {
    const { modalIsOpen, value } = this.state;
    const { productDetails, question } = this.props;

    return (
      <span>
        <button
          type="button"
          className="questionLinkButton"
          onClick={() => this.openModal()}
        >
          Add Answer
        </button>
        <div>
          <ReactModal
            isOpen={modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            className="Modal"
            overlayClassName="Overlay"
            contentLabel="Add Answer Modal"
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
              <h4 className="answerModalHeading">Submit your Answer</h4>
              <span>{`Product: ${productDetails.name}`}</span>
              <span>
                <p>{question.question_body}</p>
              </span>
              <div>
                <form
                  className="addAnswerForm"
                  onSubmit={() => this.handleSubmit()}
                >
                  <label>*Your Answer</label>
                  <br />
                  <textarea
                    placeholder="Please add your Answer..."
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
                      placeholder="Example: jack543!"
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
