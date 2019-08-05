import React, { Component } from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router';

import './App.css';
import Home from './components/Home/Home';
import Result from './components/Result/Result';

class App extends Component {
  state = {
    email: '',
    answers: [],
  };

  handleClick = (number, value, type) => {
    let answers = [...this.state.answers];
    answers.filter(answer => answer.number === number).length > 0
      ? answers.forEach(
          answer => answer.number === number && (answer.response = value),
        )
      : answers.push({ number, response: value, name: type });

    this.setState(state => ({ answers }));
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const user = { ...this.state };
    if (user.answers.length !== 10) {
      alert('You must answer all of the questions');
      return;
    }
    if (!user.email.length) {
      alert('You must enter an email');
      return;
    }
    axios
      .post('http://localhost:5000/api/user', user)
      .then(res => {
        this.props.history.push({
          pathname: '/result',
          state: { result: res.data.result.result },
        });
      })
      .catch(err => console.log('err', err));
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <Home
              handleClick={this.handleClick}
              handleSubmit={this.handleSubmit}
              handleInput={this.handleInput}
              email={this.state.email}
            />
          )}
        />
        <Route path="/result" component={Result} />
      </div>
    );
  }
}

export default withRouter(App);
