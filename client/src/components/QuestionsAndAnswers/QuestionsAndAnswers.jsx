import React, { Component } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList/QuestionList.jsx';
import './QA.scss';

const url = ' http://3.134.102.30';

class QuestionsAndAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      productDetails: {},
    };
  }

  async componentDidMount() {
    const { productId } = this.state;
    const getDetails = await axios.get(`${url}/products/${productId}`);
    this.setState({ productDetails: getDetails.data });
  }

  componentDidUpdate(prevProps) {
    const { productId } = this.props;
    if (prevProps.productId !== productId) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(
        {
          productId,
        },
        () => {
          return this.componentDidMount();
        },
      );
    }
  }

  render() {
    const { productDetails, productId } = this.state;
    console.log('productId in QA:', productId);

    return (
      <div className="questionsAndAnswersBox">
        <span className="questionsAndAnswersHeading">QUESTIONS & ANSWERS</span>
        <QuestionList productId={productId} productDetails={productDetails} />
      </div>
    );
  }
}

export default QuestionsAndAnswers;
