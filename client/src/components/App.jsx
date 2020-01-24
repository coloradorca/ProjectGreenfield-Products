import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
let exampleSampleProductStyle = require('/Users/palmimoller/HRBLD07/ProjectGreenfield/sampleData/Product/styles.json');

import '../Styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(exampleSampleProductStyle.results);
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
