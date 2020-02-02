import React, { Component } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList/QuestionList.jsx';
import './QA.scss';

const url = ' http://3.134.102.30';

// const goodIds = [2, 5, 6, 7, 8, 9, 10];
// const rando = Math.ceil(Math.random() * goodIds.length);

class QuestionsAndAnswers extends Component {
  constructor() {
    super();
    this.state = {
      productId: 8, // goodIds[rando]
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
        <h3>Questions And Answers</h3>
        <QuestionList productId={productId} productDetails={productDetails} />
      </div>
    );
  }
}

export default QuestionsAndAnswers;
