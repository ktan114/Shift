import React from 'react';
import { withRouter } from 'react-router';

const Result = props => {
  const { result } = props.location.state;
  return (
    <div>
      <h1>HELLO RESULT PAGE</h1>
      <h1>Your personality type is: {result}</h1>
    </div>
  );
};

export default withRouter(Result);
