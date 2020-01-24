import React from 'react';
import ReactDOM from 'react-dom';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <RatingsAndReviews />
        <QuestionsAndAnswers />
        <ProductOverview />
      </div>
    );
  }
}

export default App;
