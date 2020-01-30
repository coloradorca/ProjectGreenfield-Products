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
    return (
      <div>
        <div>
          Question List
          {questions.map((q, i) => (
            <div key={q.question_id}>
              {`Q${i + 1}: `}
              {q.question_body}
              <div>
                {'A: '}
                <Answers data={q.answers} />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => console.log('show more questions')}
          >
            More Answered Questions
          </button>
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
