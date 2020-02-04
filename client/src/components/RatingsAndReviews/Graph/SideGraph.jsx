/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class SideGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const breakBarFive = {
      width: `${this.props.fivePercent}%`,
      height: '18px',
      backgroundColor: 'green',
    };

    const breakBarFour = {
      width: `${this.props.fourPercent}%`,
      height: '18px',
      backgroundColor: 'green',
    };

    const breakBarThree = {
      width: `${this.props.threePercent}%`,
      height: '18px',
      backgroundColor: 'green',
    };

    const breakBarTwo = {
      width: `${this.props.twoPercent}%`,
      height: '18px',
      backgroundColor: 'green',
    };

    const breakBarOne = {
      width: `${this.props.onePercent}%`,
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
