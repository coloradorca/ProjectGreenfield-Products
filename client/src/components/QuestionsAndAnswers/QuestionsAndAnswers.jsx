import React, { Component } from 'react';
import QuestionList from './QuestionList/QuestionList.jsx';
import './QA.scss';

// const goodIds = [2, 5, 6, 7, 8, 9, 10];
// const rando = Math.ceil(Math.random() * goodIds.length);

class QuestionsAndAnswers extends Component {
  constructor() {
    super();
    this.state = {
      productId: 8, // goodIds[rando]
    };
  }

  render() {
    const { productId } = this.state;
    return (
      <div className="questionsAndAnswersBox">
        <h3>Questions And Answers</h3>
        <QuestionList productId={productId} />
      </div>
    );
  }
}

export default QuestionsAndAnswers;
