/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Moment from 'react-moment';
// import PropTypes from 'prop-types'

const Answers = ({ data }) => {
  return (
    <div>
      {data.map((answer, i) => {
        if (i < 2) {
          return (
            <div key={answer.id}>
              {`${i + 1}) '${answer.body}'`}
              <div>
                <span>{'by: '}</span>
                <span>{answer.answerer_name}</span>
                <span>{', '}</span>
                <span>
                  <Moment format="MMMM DD, YYYY">{answer.date}</Moment>
                </span>
                <div>
                  <span>Helpful?</span>
                  <a href="#" onClick={() => console.log('POST helpfulness+1')}>
                    {`Yes(${answer.helpfulness})`}
                  </a>
                  <span>
                    <a href="#" onClick={() => console.log('Reported')}>
                      Report
                    </a>
                  </span>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
      <button type="button" onClick={() => console.log('show more answers')}>
        See More Answers
      </button>
    </div>
  );
};

// Answers.propTypes = {};

export default Answers;
