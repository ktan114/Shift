import React, { Component } from 'react';
import axios from 'axios';

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
  state = {
    email: '',
    answers: [],
  };

  handleClick = (number, value, type) => {
    let answers = [...this.state.answers];
    answers.filter(answer => answer.number === number).length > 0
      ? answers.forEach(
          answer => answer.number === number && (answer.value = value),
        )
      : answers.push({ number, response: value, name: type });

    this.setState(state => ({ answers }));
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const user = {...this.state};
    axios.post('localhost:5000/api/user', user).then(res => console.log('res'))
  }

  render() {
    const questions = [
      {
        question_number: 1,
        question_name:
          'You find it takes effort to introduce yourself to other people.',
        question_type: 'EI',
      },
      {
        question_number: 2,
        question_name: 'You consider yourself more practical than creative.',
        question_type: 'SN',
      },
      {
        question_number: 3,
        question_name:
          'Winning a debate matters less to you than making sure no one gets upset.',
        question_type: 'TF',
      },
      {
        question_number: 4,
        question_name:
          'You get energized going to social events that involve many interactions.',
        question_type: 'EI',
      },
      {
        question_number: 5,
        question_name:
          'You often spend time exploring unrealistic and impractical yet intriguing ideas.',
        question_type: 'SN',
      },
      {
        question_number: 6,
        question_name:
          'Deadlines seem to you to be of relative rather than absolute importance.',
        question_type: 'JP',
      },
      {
        question_number: 7,
        question_name:
          'Logic is usually more important than heart when it comes to making important decisions.',
        question_type: 'TF',
      },
      {
        question_number: 8,
        question_name: 'Your home and work environments are quite tidy.',
        question_type: 'JP',
      },
      {
        question_number: 9,
        question_name: 'You do not mind being at the center of attention.',
        question_type: 'EI',
      },
      {
        question_number: 10,
        question_name:
          'Keeping your options open is more important than having a to-do list.',
        question_type: 'JP',
      },
    ];
    return (
      <div className="App">
        <h1>Shift Challenge</h1>
        <h2>Discover Your Perspective</h2>
        <p>
          Complete the 7 min test and get a detailed report of your lenses on
          the world
        </p>
        {questions.map((question, i) => {
          return (
            <React.Fragment key={i}>
              <Question handleClick={this.handleClick} question={question} />
            </React.Fragment>
          );
        })}
        <h1>Your Email</h1>
        <input
          type="text"
          placeholder="you@example.com"
          name="email"
          value={this.state.email}
          onChange={this.handleInput}
        />
        <button>Save and Continue</button>
      </div>
    );
  }
}

export default App;
