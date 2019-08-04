import React from 'react';
import { withRouter } from 'react-router';

const Result = props => {
  const { result } = props.location.state;
  return (
    <div>
      <h1>Your Perspective</h1>
      <h1>Your Perspective Type is: {result}</h1>
      <p>
        <span>Introversion (I)</span> <span>Extraversion (E)</span>
      </p>
      <p>
        <span>Sensing (S)</span> <span>Intuition (I)</span>
      </p>
      <p>
        <span>Thinking (T)</span> <span>Feeling (F)</span>
      </p>
      <p>
        <span>Judging (J)</span> <span>Perceiving (P)</span>
      </p>
    </div>
  );
};

export default withRouter(Result);
