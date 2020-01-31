import React from 'react';
import AnswerList from '../AnswerList/AnswerList.jsx';

const Question = ({ question, qId }) => {
  return (
    <div>
      {`Q: ${question.question_body}`}
      <AnswerList qId={qId} />
    </div>
  );
};

export default Question;
