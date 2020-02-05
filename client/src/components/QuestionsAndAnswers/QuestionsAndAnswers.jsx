import React, { Component } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList/QuestionList.jsx';
import './QA.scss';

const url = ' http://3.134.102.30';

class QuestionsAndAnswers extends Component {
  constructor() {
    super();
    this.state = {
      productId: 5, // goodIds[rando]
      productDetails: {},
    };
  }

  async componentDidMount() {
    const { productId } = this.state;
    const getDetails = await axios.get(`${url}/products/${productId}`);
    this.setState({ productDetails: getDetails.data });
  }

  render() {
    const { productId, productDetails } = this.state;
    return (
      <div className="questionsAndAnswersBox">
        <span className="questionsAndAnswersHeading">QUESTIONS & ANSWERS</span>
        <QuestionList productId={productId} productDetails={productDetails} />
      </div>
    );
  }
}

export default QuestionsAndAnswers;
