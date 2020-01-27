import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
<<<<<<< HEAD
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';

// let exampleSampleProductStyle = require('/Users/palmimoller/HRBLD07/ProjectGreenfield/sampleData/Product/styles.json');
=======
import ProductOverview from './ProductOverview/ProductOverview';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers';
>>>>>>> 48638023af1911244530aea3a47ea59f12dbaea9

import '../App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
<<<<<<< HEAD
      <div className='mains'>
        <ProductOverview />
=======
      <div className="mains">
>>>>>>> 48638023af1911244530aea3a47ea59f12dbaea9
        <RatingsAndReviews />
        <QuestionsAndAnswers />
      </div>
    );
  }
}
var test = 'hello';

export default App;
