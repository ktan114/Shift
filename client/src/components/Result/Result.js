import React from 'react';
import { withRouter } from 'react-router';

import './Result.css';

const Result = props => {
  const { result } = props.location.state;
  const leftSide = (
    <div className="Result__Bar">
      <p className="Result__Side Result__Side--purple" />
      <p className="Result__Side Result__Side--lightgrey" />
    </div>
  );
  const rightSide = (
    <div className="Result__Bar">
      <p className="Result__Side Result__Side--lightgrey" />
      <p className="Result__Side Result__Side--purple" />
    </div>
  );
  return (
    <div className="Result">
      <div className="Result__Display">
        <h1 className="Result__h1">Your Perspective</h1>
        <h3>Your Perspective Type is: {result}</h3>
      </div>
      <div className="Result__Indicators">
        <div className="Result__Indicator">
          <p>Introversion (I)</p>
          {result[0] === 'I' ? leftSide : rightSide}
          <p>Extraversion (E)</p>
        </div>
        <div className="Result__Indicator">
          <p>Sensing (S)</p> {result[1] === 'S' ? leftSide : rightSide}
          <p className="Result__Indicator--marginLeft1">Intuition (N)</p>
        </div>
        <div className="Result__Indicator">
          <p>Thinking (T)</p> {result[2] === 'T' ? leftSide : rightSide}{' '}
          <p className="Result__Indicator--marginLeft2">Feeling (F)</p>
        </div>
        <div className="Result__Indicator">
          <p className="Result__Indicator--marginRight">Judging (J)</p>{' '}
          {result[3] === 'J' ? leftSide : rightSide} <p>Perceiving (P)</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Result);
