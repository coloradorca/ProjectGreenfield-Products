/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import RedDot from './RedDot.jsx';

const url = 'http://3.134.102.30/reviews/report';

class ReportReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.markReport = this.markReport.bind(this);
  }

  async markReport() {
    const { reviewId } = this.props;
    const report = await axios.put(`${url}/${reviewId}`);
    this.setState({
      show: true,
    });
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        Report
        <input type="radio" onClick={() => this.markReport()} />
        <RedDot show={show} />
      </div>
    );
  }
}

export default ReportReview;
