import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';

import '../App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 0,
    };
  }

  render() {
    return (
      <div className="mains">
        <ProductOverview />
        {/* <RatingsAndReviews />
        <QuestionsAndAnswers /> */}
      </div>
    );
  }
}

export default App;
