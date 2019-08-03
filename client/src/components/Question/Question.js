import React, { Component } from 'react';
import RadioButton from '../RadioButton/RadioButton';

import './Question.css';

class Question extends Component {
  state = {};

  render() {
    const { question } = this.props;
    const buttons = [];
    for (let i = 0; i < 7; i++) {
      buttons.push(<RadioButton />);
    }
    return (
      <div className="Question">
        <h3> {question} </h3>
        <div className="Question__Buttons">
          <h1>Disagree</h1>
          {buttons.map(button => {
            return button;
          })}
          <h1> Agree </h1>
        </div>
      </div>
    );
  }
}

export default Question;
