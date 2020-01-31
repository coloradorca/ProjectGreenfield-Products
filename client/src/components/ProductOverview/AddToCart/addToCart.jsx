import React from 'react';

import './addToCart.scss';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      allsizes: [this.props.data.skus],
      size: '',
      numberOfSizeSelected: 15,
    };
    this.createQuantity = this.createQuantity.bind(this);
    this.selectSize = this.selectSize.bind(this);
  }

  createQuantity() {
    let quantity = [];
    for (let i = 0; i <= this.state.numberOfSizeSelected; i++) {
      quantity.push(<a key={i}>{i}</a>);
    }
    return quantity;
  }

  selectSize(select) {
    this.setState({
      size: select,
    });
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
        <div className="addToCartButton">
          <button> Add To Cart</button>
        </div>
      </div>
    );
  }
}

export default AddToCart;
