import React, { Component } from 'react';
import Moment from 'react-moment';
import './Answer.scss';

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reported: 'Report',
    };
  }

  handleClick = () => {
    this.setState({ reported: 'Reported' });
    console.log(this.state);
  };

  render() {
    const { answer, aId } = this.props;
    const { reported } = this.state;
    return (
      <div className="answer">
        {`A: ${answer.body} `}
        <div className="user">
          <span>{'by: '}</span>
          <span>{answer.answerer_name}</span>
          <span>{', '}</span>
          <span>
            <Moment format="MMMM DD, YYYY">{answer.date}</Moment>
          </span>
          <span className="helpful">{` | Helpful?`}</span>
          <button
            type="button"
            className="linkButton"
            onClick={() => console.log('POST helpfulness+1')}
          >
            Yes
          </button>
          <span className="count">{`(${answer.helpfulness}) | `}</span>
          <button
            type="button"
            className="linkButton"
            onClick={() => this.handleClick()}
          >
            {reported}
          </button>
        </div>
      </div>
    );
  }
}

// const Answer = ({ answer, aId }) => {
//   return (
//     <div className="answer">
//       {`A: ${answer.body} `}
//       <div className="user">
//         <span>{'by: '}</span>
//         <span>{answer.answerer_name}</span>
//         <span>{', '}</span>
//         <span>
//           <Moment format="MMMM DD, YYYY">{answer.date}</Moment>
//         </span>
//         <span className="helpful">{` | Helpful?`}</span>
//         <button
//           type="button"
//           className="linkButton"
//           onClick={() => console.log('POST helpfulness+1')}
//         >
//           Yes
//         </button>
//         <span className="count">{`(${answer.helpfulness}) | `}</span>
//         <button
//           type="button"
//           className="linkButton"
//           onClick={() => console.log('reported')}
//         >
//           Report
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Answer;
