import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from 'axios';
import Answer from '../Answer/Answer.jsx';
import './AnswerList.scss';

const url = 'http://3.134.102.30';

export default class AnswerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      showing: 2,
      status: 'LOAD MORE ANSWERS',
    };
  }

  async componentDidMount() {
    const { qId } = this.props;
    try {
      // `${url}/qa/${qId}/answers?count=10` <--if we wanted to specify count
      const getAnswers = await axios.get(`${url}/qa/${qId}/answers`);
      this.setState({ answers: getAnswers.data.results });
    } catch (error) {
      console.error(error);
    }
  }

  handleClick = () => {
    // this.setState((previous) => ({ showing: previous.showing + 2 })); <-- if we wanted to increment 2 at a time
    const { status, answers } = this.state;
    if (status === 'LOAD MORE ANSWERS') {
      this.setState({ showing: answers.length, status: 'COLLAPSE ANSWERS' });
    } else {
      this.setState({ showing: 2, status: 'LOAD MORE ANSWERS' });
    }
    console.log(this.state);
  };

  render() {
    const { answers, showing, status } = this.state;
    if (answers.length > 2) {
      return (
        <div className="answerList">
          {answers.slice(0, showing).map((a) => (
            <div key={a.answer_id}>
              <Answer answer={a} aId={a.answer_id} />
            </div>
          ))}
          <button
            className="answerButton"
            type="button"
            onClick={() => {
              this.handleClick();
            }}
          >
            {status}
          </button>
        </div>
      );
    }
    return (
      <div className="answerList">
        {answers.slice(0, showing).map((a) => (
          <div key={a.answer_id}>
            <Answer answer={a} aId={a.answer_id} />
          </div>
        ))}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(AnswerList);
