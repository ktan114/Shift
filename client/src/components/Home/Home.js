import React from 'react';
import { withRouter } from 'react-router-dom';

import questions from '../../questions';
import Question from '../Question/Question';

const Home = props => {
  return (
    <div>
      <h1>Shift Challenge</h1>
      <h2>Discover Your Perspective</h2>
      <p>
        Complete the 7 min test and get a detailed report of your lenses on the
        world
      </p>
      {questions.map((question, i) => {
        return (
          <React.Fragment key={i}>
            <Question handleClick={props.handleClick} question={question} />
          </React.Fragment>
        );
      })}
      <h1>Your Email</h1>
      <input
        type="text"
        placeholder="you@example.com"
        name="email"
        value={props.email}
        onChange={props.handleInput}
      />
      <button onClick={props.handleSubmit}>Save and Continue</button>
    </div>
  );
};

export default withRouter(Home);
