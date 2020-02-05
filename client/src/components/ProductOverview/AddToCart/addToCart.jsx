import React from 'react';

import './addToCart.scss';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      allsizes: '',
      size: '',
      numberOfSizeSelected: 15,
    };
    this.createQuantity = this.createQuantity.bind(this);
    this.selectSize = this.selectSize.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    this.setState({
      allsizes: [data.skus],
    });
  }

  createQuantity() {
    const { numberOfSizeSelected } = this.state;
    const quantity = [];
    for (let i = 0; i <= numberOfSizeSelected; i += 1) {
      quantity.push(<a key={i}>{i}</a>);
    }
    return quantity;
  }

  selectSize(select) {
    const { allsizes } = this.state;
    this.setState({
      size: select,
    });
    for (const key in allsizes[0]) {
      if (select === key) {
        this.setState({
          numberOfSizeSelected: allsizes[0][key],
        });
      }
    }
  }

  render() {
    return (
      <div className="cart">
        Add to Cart
        <br />
        <div className="dropdown">
          <button className="dropbtn">Select Size</button>
          <div className="dropdown-content">
            {Object.keys(this.props.data.skus).map((el, i) => (
              <a onClick={(e) => this.selectSize(el)} key={i}>
                {el}
              </a>
            ))}
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Quantity</button>
          <div className="dropdown-content">{this.createQuantity()}</div>
        </div>
        <div className="dropdown">
          <button className="dropbtn addToCartButton"> Add To Cart</button>
        </div>
      </div>
    );
  }
}

export default AddToCart;
