/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class SideGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fivePercent: this.props.fivePercent,
      fourPercent: this.props.fourPercent,
      threePercent: this.props.threePercent,
      twoPercent: this.props.twoPercent,
      onePercent: this.props.onePercent,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.fivePercent !== prevProps.fivePercent) {
      this.setState({
        fivePercent: this.props.fivePercent,
      });
    }
    if (this.props.fourPercent !== prevProps.fourPercent) {
      this.setState({
        fourPercent: this.props.fourPercent,
      });
    }
    if (this.props.threePercent !== prevProps.threePercent) {
      this.setState({
        threePercent: this.props.threePercent,
      });
    }
    if (this.props.twoPercent !== prevProps.twoPercent) {
      this.setState({
        twoPercent: this.props.twoPercent,
      });
    }
    if (this.props.onePercent !== prevProps.onePercent) {
      this.setState({
        onePercent: this.props.onePercent,
      });
    }
  }

  render() {
    const breakBarFive = {
      width: `${this.state.fivePercent}%`,
      height: '18px',
      backgroundColor: 'green',
    };

    const breakBarFour = {
      width: `${this.state.fourPercent}%`,
      height: '18px',
      backgroundColor: 'green',
    };

    const breakBarThree = {
      width: `${this.state.threePercent}%`,
      height: '18px',
      backgroundColor: 'green',
    };

    const breakBarTwo = {
      width: `${this.state.twoPercent}%`,
      height: '18px',
      backgroundColor: 'green',
    };

    const breakBarOne = {
      width: `${this.state.onePercent}%`,
      height: '18px',
      backgroundColor: 'green',
    };
    return (
      <div className="breakdownRow">
        <div className="breakdownSide">
          <div> 5 Star</div>
        </div>
        <div className="breakdownMiddle">
          <div className="breakBarContainer">
            <div style={breakBarFive} />
          </div>
        </div>
        <div className="breakdownSide">
          <div> 4 Star</div>
        </div>
        <div className="breakdownMiddle">
          <div className="breakBarContainer">
            <div style={breakBarFour} />
          </div>
        </div>
        <div className="breakdownSide">
          <div> 3 Star</div>
        </div>
        <div className="breakdownMiddle">
          <div className="breakBarContainer">
            <div style={breakBarThree} />
          </div>
        </div>
        <div className="breakdownSide">
          <div> 2 Star</div>
        </div>
        <div className="breakdownMiddle">
          <div className="breakBarContainer">
            <div style={breakBarTwo} />
          </div>
        </div>
        <div className="breakdownSide">
          <div> 1 Star</div>
        </div>
        <div className="breakdownMiddle">
          <div className="breakBarContainer">
            <div style={breakBarOne} />
          </div>
        </div>
      </div>
    );
  }
}

export default SideGraph;
