/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';

const url = 'http://3.134.102.30/reviews/helpful';

class HelpfulClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.helpfulness,
    };
    this.markHelpful = this.markHelpful.bind(this);
  }

  async markHelpful(e) {
    const { reviewId } = this.props;
    e.preventDefault();
    const markHelpful = await axios.put(`${url}/${reviewId}`);
    this.setState((prevState) => {
      return {
        helpfulness: prevState.helpfulness + 1,
      };
    });
  }

  render() {
    const { helpfulness } = this.state;
    return (
      <div className="helpTile">
        Helpful? Yes
        <input
          type="radio"
          className="yesHelp"
          onClick={(e) => this.markHelpful(e)}
        />
        <div className="helpfulnessRating">{helpfulness}</div>
      </div>
    );
  }
}

export default HelpfulClick;
