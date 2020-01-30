// so take in the rating and fill in the number of stars

import React from 'react';

class TileStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating,
    };
  }

  //this.props.rating => for immported stars
  // need to make on click for not clicked stars

  render() {
    return <div>HI</div>;
  }
}

export default TileStar;
