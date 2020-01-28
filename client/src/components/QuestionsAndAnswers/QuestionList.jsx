/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import { connect } from 'react-redux'
import Answers from './Answers.jsx';

const data = require('../../../../sampleData/QA/quesList.json');
// QA -renders-> (QuestionList) -renders-> Question -renders-> Answer

export default class QuestionList extends Component {
  constructor() {
    super();
    this.state = {
      questions: data.results,
    };
  }

  render() {
    const { questions } = this.state;
    // render Question component, start with 4 on page load
    return (
      <div>
        <div>
          Question List
          {questions.map((q) => (
            <div>
              {'Q: '}
              {q.question_body}
              <div>
                {'A: '}
                <Answers data={q.answers} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
