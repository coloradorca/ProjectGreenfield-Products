import React, { Component } from 'react';
// import { connect } from 'react-redux'
import axios from 'axios';
import Question from '../Question/Question.jsx';
import AddQuestion from '../AddQuestion/AddQuestion.jsx';
import './QuestionList.scss';

const url = 'http://3.134.102.30/qa';

export default class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      showing: 2,
    };
  }

  async componentDidMount() {
    const { productId } = this.props;
    try {
      const getQuestions = await axios.get(`${url}/${productId}`);
      this.setState({ questions: getQuestions.data.results });
    } catch (error) {
      console.error(error);
    }
    console.log(productId, this.state);
  }

  handleClick = () => {
    this.setState((previous) => ({ showing: previous.showing + 2 }));
    console.log('showing 2 more questions', this.state);
  };

  render() {
    const { questions, showing } = this.state;
    const { productDetails } = this.props;
    return (
      <div>
        <h4>Question List</h4>
        {questions.slice(0, showing).map((q) => (
          <div key={q.question_id} className="questionListQuestion">
            <Question
              question={q}
              qId={q.question_id}
              productDetails={productDetails}
            />
          </div>
        ))}
        <div>
          <span>
            <button
              className="questionButton"
              type="button"
              onClick={() => this.handleClick()}
            >
              MORE ANSWERED QUESTIONS
            </button>
          </span>
          <span>
            <AddQuestion productDetails={productDetails} />
          </span>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
