import React, { Component } from 'react';
import QuestionList from './QuestionList/QuestionList.jsx';

const rando = Math.ceil(Math.random() * 100);

class QuestionsAndAnswers extends Component {
  constructor() {
    super();
    this.state = {
      productId: rando,
    };
  }

  render() {
    const { productId } = this.state;
    return (
      <div>
        <h3>Questions And Answers</h3>
        <QuestionList productId={productId} />
      </div>
    );
  }
}

export default QuestionsAndAnswers;
