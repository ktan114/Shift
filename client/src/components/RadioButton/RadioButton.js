import React from 'react';

import './RadioButton.css';

const RadioButton = props => {
  const { question_number, value, type } = props;
  return (
    <button
      onClick={() => {
        props.handleClick(question_number, value, type);
      }}
      className="RadioButton"
      type="radio"
    />
  );
};

export default RadioButton;
