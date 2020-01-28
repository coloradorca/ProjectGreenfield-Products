import React, { Component } from 'react';
import QuestionList from './QuestionList.jsx';

const data = require('../../../../sampleData/QA/quesList.json');

// (QA) -renders-> QuestionList -renders-> Question -renders-> Answer

class QuestionsAndAnswers extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Heir Force Ones',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        Questions And Answers
        <div>Product: {name}</div>
        <QuestionList />
      </div>
    );
  }
}

export default QuestionsAndAnswers;
