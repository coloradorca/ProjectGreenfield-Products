import React, { Component } from 'react';
// import React, { Component } from 'react'
import axios from 'axios';
import Modal from 'react-responsive-modal';
import AnswerList from '../AnswerList/AnswerList.jsx';
import './Question.scss';

const url = 'http://3.134.102.30/qa/question';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: 'Yes',
      helpfulness: 0,
      open: false,
      value: '',
    };
  }

  componentDidMount() {
    const { question } = this.props;
    this.setState({ helpfulness: question.question_helpfulness });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleHelpfulClick = () => {
    const { qId } = this.props;
    const { helpful } = this.state;

    if (helpful === 'Yes') {
      axios.put(`${url}/${qId}/helpful`);
      this.setState((previous) => ({ helpfulness: previous.helpfulness + 1 }));
      this.setState({ helpful: 'Yep' });
    }
    return null;
  };

  handleSubmit = (event) => {
    const { value } = this.state;
    console.log(`A name was submitted: ${value}`);
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { question, qId } = this.props;
    const { helpfulness, open, value } = this.state;

    return (
      <div className="question">
        <span>{`Q: ${question.question_body}`}</span>
        <span className="helpfulQ">
          {`Helpful? `}
          <span>
            <button
              type="button"
              className="questionLinkButton"
              onClick={() => this.handleHelpfulClick()}
            >
              Yes
            </button>
            <span className="count">{`(${helpfulness}) | `}</span>
            <button
              type="button"
              className="questionLinkButton"
              onClick={() => this.onOpenModal()}
            >
              Add Answer
            </button>
            <Modal open={open} onClose={() => this.onCloseModal()} center>
              <h2>Simple centered modal</h2>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Answer:
                  <input
                    type="text"
                    value={value}
                    onChange={this.handleChange}
                  />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </Modal>
          </span>
        </span>
        <AnswerList qId={qId} />
      </div>
    );
  }
}

// export default Question;
