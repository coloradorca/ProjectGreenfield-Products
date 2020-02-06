import React, { Component } from 'react';
import axios from 'axios';
import Question from '../Question/Question.jsx';
import AddQuestion from '../AddQuestion/AddQuestion.jsx';
import './QuestionList.scss';

const url = 'http://3.134.102.30/qa';

// QuestionsAndAnswers --> QuestionsList -{filter}-> Question --> AnswerList --> Answer

export default class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: [],
      someQuestions: [],
      showing: 2,
      search: '',
    };
  }

  async componentDidMount() {
    const { productId } = this.props;
    try {
      const getQuestions = await axios.get(`${url}/${productId}`);
      this.setState({
        someQuestions: getQuestions.data.results,
        allQuestions: getQuestions.data.results,
      });
    } catch (error) {
      console.error(error);
    }
    console.log('got these questions', productId, this.state);
  }

  handleChange = (event) => {
    const { search } = this.state;
    this.setState({ search: event.target.value });
    console.log(search);
    this.setState({ someQuestions: this.filterQuestions() });
  };

  filterQuestions = () => {
    const { search, allQuestions } = this.state;
    return allQuestions
      .slice()
      .filter((obj) =>
        obj.question_body.toLowerCase().includes(search.toLowerCase()),
      );
  };

  handleClick = () => {
    this.setState((previous) => ({ showing: previous.showing + 2 }));
    console.log('showing 2 more questions', this.state);
  };

  render() {
    const { someQuestions, allQuestions, showing, search } = this.state;
    const { productDetails } = this.props;
    const renderQuestions = search.length >= 3 ? someQuestions : allQuestions;

    if (allQuestions.length === 0) {
      return (
        <div>
          <br />
          {`No Questions Have Been Asked About ${productDetails.name}`}
          <br />
          <AddQuestion productDetails={productDetails} />
        </div>
      );
    }
    if (showing >= allQuestions.length) {
      return (
        <div>
          <div className="searchQuestions">
            <input
              id="searchBar"
              type="search"
              placeholder="Have a question? Search for the answers..."
              size="100"
              maxLength="20"
              value={search}
              onChange={this.handleChange}
            />
          </div>
          <div className="questionList">
            {renderQuestions.slice(0, showing).map((q) => (
              <div key={q.question_id} className="questionListQuestion">
                <Question
                  question={q}
                  qId={q.question_id}
                  productDetails={productDetails}
                />
              </div>
            ))}
          </div>
          <div>
            <span>
              <AddQuestion productDetails={productDetails} />
            </span>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="searchQuestions">
          <input
            id="searchBar"
            type="search"
            placeholder="Have a question? Search for the answers..."
            size="100"
            maxLength="20"
            value={search}
            onChange={this.handleChange}
          />
        </div>
        {renderQuestions.slice(0, showing).map((q) => (
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
