/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';

const url = 'http://3.134.102.30/reviews/report';

class ReportReview extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const report = await axios.put(`${url}/${review_id}`);
  }

  render() {
    return <div>HI</div>;
  }
}

export default ReportReview;
