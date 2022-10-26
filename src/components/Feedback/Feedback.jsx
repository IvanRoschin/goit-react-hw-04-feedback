import React from 'react';
import { FeedbackButtons } from './FeedbackButtons';

export class Feedback extends React.Component {
  static defaulProps = {
    initialValue: 0,
  };

  //   static PropTypes = {};

  state = {
    goodValue: this.props.initialValue,
    neutralValue: this.props.initialValue,
    badValue: this.props.initialValue,
  };

  goodIncrement = () => {
    this.setState(prevState => {
      return {
        goodValue: prevState.goodValue + 1,
      };
    });
  };

  neutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutralValue: prevState.neutralValue + 1,
      };
    });
  };

  badIncrement = () => {
    this.setState(prevState => {
      return {
        badValue: prevState.badValue + 1,
      };
    });
  };

  //   countTotalFeedback = () => {
  //     this.setState(prevState => {
  //       return this.goodIncrement + this.neutralIncrement + this.badIncrement;
  //     });
  //   };

  render() {
    return (
      <div>
        Feedback
        <h2>Please leave feedback</h2>
        neutralIncrement,
        <FeedbackButtons
          goodIncrement={this.goodIncrement}
          neutralIncrement={this.neutralIncrement}
          badIncrement={this.badIncrement}
        />
        <h2>Statistics</h2>
        <div>
          Good: <span>{this.state.goodValue}</span>
        </div>
        <div>
          Neutral: <span>{this.state.neutralValue}</span>
        </div>
        <div>
          Bad: <span>{this.state.badValue}</span>
        </div>
        <div>
          Total: <span>{this.countTotalFeedback}</span>
        </div>
        <div>
          Positive feedback: <span>{this.state.badValue}</span>
        </div>
      </div>
    );
  }
}
