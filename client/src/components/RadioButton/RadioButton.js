import React from 'react';

import './RadioButton.css';

const RadioButton = props => {
  const { question_number, value, type, name } = props;
  return (
    <input
      onClick={() => {
        props.handleClick(question_number, value, type);
      }}
      className="RadioButton"
      type="radio"
      name={name}
    />
  );
};

export default RadioButton;
