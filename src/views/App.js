import React, { Component } from 'react';

import { Header, Choice } from './';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      choice: null,
      result: null
    };

    this.choices = {
      'scissor': 'paper',
      'paper': 'rock',
      'rock': 'scissor'
    }
  }

  componentDidMount() {
    const score = localStorage.getItem('score');
    this.setState({
      score: +score
    })
  }

  render() {
    return (
      <div className="App">
        <Header score={this.state.score} />
        <Choice />
      </div>
    );
  }
}

export default App;
