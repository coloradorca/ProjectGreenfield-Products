/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Line from './Line.jsx';
import Bar from './Bar.jsx';
import BarTextContent from './BarTextContent.jsx';

class SideGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.makeLines = this.makeLines.bind(this);
    this.makeBars = this.makeBars.bind(this);
  }
  componentDidMount() {
    console.log('heyt');
    this.makeBars();
  }
  // makeLines() {
  //   return Array(10)
  //     .fill(null)
  //     .map((el, i) => <Line left={i * 10} key={i} />);
  // }

  makeBars() {
    const reviewArr = this.props.reviewArr;
    console.log(this.props.reviewArr);
    const total = reviewArr[reviewArr.length - 1];
    const numbersArr = reviewArr.pop();

    return numbersArr.map((ratings) => {
      const percent = (ratings / total) * 100;
      return <Bar percent={percent} />;
    });
  }

  render() {
    return (
      <div>
        <BarTextContent />
        <div>
          {/* {this.makeLines()} */}
          {/* {this.makeBars()} */}
        </div>
        <div style={{ width: '12%' }} />
      </div>
    );
  }
}

export default SideGraph;
