import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductOverview from './ProductOverview/ProductOverview';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers';

import '../App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mains">
        <RatingsAndReviews />
        <QuestionsAndAnswers />
      </div>
    );
  }
}
var test = 'hello';

export default App;
