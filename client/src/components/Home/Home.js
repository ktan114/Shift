import React from 'react';
import { withRouter } from 'react-router-dom';

import './Home.css';
import questions from '../../questions';
import Question from '../Question/Question';

const Home = props => {
  return (
    <div className="Home">
      <h1>Shift Challenge</h1>
      <h2 className="Home__h2">Discover Your Perspective</h2>
      <p className="Home__p">
        Complete the 7 min test and get a detailed report of your lenses on the
        world
      </p>
      <div className="Home__Questionnaire">
        {questions.map((question, i) => {
          return (
            <React.Fragment key={i}>
              <Question handleClick={props.handleClick} question={question} />
            </React.Fragment>
          );
        })}
        <div className="Home__Input">
          <p className="Home__h1">Your Email</p>
          <input
            type="text"
            placeholder="you@example.com"
            className="Home__InputBox"
            name="email"
            value={props.email}
            onChange={props.handleInput}
          />
        </div>
        <button className="Home__Button" onClick={props.handleSubmit}>Save and Continue</button>
      </div>
    </div>
  );
};

export default withRouter(Home);
