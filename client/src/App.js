import React, { Component } from 'react';

import './App.css';
import Question from './components/Question/Question';

/*
  3 EIs
    You find it takes effort to introduce yourself to other people.
    You get energized going to social events that involve many interactions.
    You do not mind being at the center of attention.
  2 SN
    You consider yourself more practical than creative.
    You often spend time exploring unrealistic and impractical yet intriguing ideas.
  2 TF
    Winning a debate matters less to you than making sure no one gets upset.
    Logic is usually more important than heart when it comes to making important decisions.
  3 JP
    Deadlines seem to you to be of relative rather than absolute importance.
    Your home and work environments are quite tidy.
    Keeping your options open is more important than having a to-do list.
*/

class App extends Component {
  render() {
    const questions = [
      'You find it takes effort to introduce yourself to other people.',
      'You consider yourself more practical than creative.',
      'Winning a debate matters less to you than making sure no one gets upset.',
      'You get energized going to social events that involve many interactions.',
      'You often spend time exploring unrealistic and impractical yet intriguing ideas.',
      'Deadlines seem to you to be of relative rather than absolute importance.',
      'Logic is usually more important than heart when it comes to making important decisions.',
      'Your home and work environments are quite tidy.',
      'You do not mind being at the center of attention.',
      'Keeping your options open is more important than having a to-do list.',
    ];
    return (
      <div className="App">
        <h1>Shift Challenge</h1>
        <h2>Discover Your Perspective</h2>
        <p>
          Complete the 7 min test and get a detailed report of your lenses on
          the world
        </p>
        {questions.map(question => {
          return <Question question={question} />;
        })}
      </div>
    );
  }
}

export default App;
