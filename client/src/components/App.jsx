import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import { withRouter } from 'react-router-dom';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';

import '../App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 3,
    };
    this.changeProduct = this.changeProduct.bind(this);
  }

  changeProduct(e, newId) {
    e.preventDefault();
    this.setState({
      productId: newId,
    });
  }

  render() {
    const { productId } = this.state;
    return (
      <div className="mains">
        <ProductOverview
          changeProduct={this.changeProduct}
          productId={productId}
        />
        <QuestionsAndAnswers productId={productId} />
        <RatingsAndReviews productId={productId} />
      </div>
    );
  }
}

export default withRouter(App);
