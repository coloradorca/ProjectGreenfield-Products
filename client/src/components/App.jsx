import React from 'react';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';

import '../App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      productId: 50,
=======
      productId: 8,
>>>>>>> 351f25810397f014eacb81710dd4b8be1a17d595
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
<<<<<<< HEAD
        <QuestionsAndAnswers
          productId={productId}
          changeProduct={this.changeProduct}
        />
=======
        <QuestionsAndAnswers productId={productId} />
>>>>>>> 351f25810397f014eacb81710dd4b8be1a17d595
        <RatingsAndReviews productId={productId} />
      </div>
    );
  }
}

export default App;
