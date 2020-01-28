/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types'

const Answers = ({ data }) => {
  return (
    <div>
      {data.map((answer) => (
        <div>
          {answer.body}
          <div>
            <span>{'by: '}</span>
            <span>{answer.answerer_name}</span>
            <span>{', '}</span>
            <span>
              {`${answer.date.substring(5, 7)}/`}
              {`${answer.date.substring(8, 10)}/`}
              {answer.date.substring(0, 4)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

// Answers.propTypes = {};

export default Answers;
