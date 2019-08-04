import React from 'react';
import RadioButton from '../RadioButton/RadioButton';

import './Question.css';

const Question = props => {
  const { question, handleClick } = props;
  const buttons = [];
  for (let i = 0; i < 7; i++) {
    buttons.push(
      <RadioButton
        question_number={question.question_number}
        type={question.question_type}
        handleClick={handleClick}
        value={i + 1}
        name={`${question.question_number}button`}
      />,
    );
  }
  return (
    <div className="Question">
      <p className="Question__Text"> {question.question_name} </p>
      <div className="Question__Buttons">
        <p className="Question__Text--red">Disagree</p>
        {buttons.map((button, i) => {
          return <React.Fragment key={i}>{button}</React.Fragment>;
        })}
        <p className="Question__Text--green"> Agree </p>
      </div>
    </div>
  );
};

export default Question;
