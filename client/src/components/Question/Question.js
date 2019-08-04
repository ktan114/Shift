import React, { Component } from 'react';
import RadioButton from '../RadioButton/RadioButton';

import './Question.css';

class Question extends Component {
  render() {
    const { question, handleClick } = this.props;
    const buttons = [];
    for (let i = 0; i < 7; i++) {
      buttons.push(
        <RadioButton
          question_number={question.question_number}
          type={question.question_type}
          handleClick={handleClick}
          value={i + 1}
        />,
      );
    }
    return (
      <div className="Question">
        <h3> {question.name} </h3>
        <div className="Question__Buttons">
          <h1>Disagree</h1>
          {buttons.map((button, i) => {
            return <React.Fragment key={i}>{button}</React.Fragment>;
          })}
          <h1> Agree </h1>
        </div>
      </div>
    );
  }
}

export default Question;
