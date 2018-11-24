import React, { Component } from 'react';
import Menu from './menu/Menu';
import Board from './board/Board';
import './App.css';

const defaultState = {
  win: 0,
  tie: 0,
  loss: 0,
}

class App extends Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleReset = this.handleReset.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }

  handleReset() {
    this.setState(defaultState);
  }

  handleResult(result) {
    this.setState({
      win: this.state.win + (result === 'user'),
      tie: this.state.tie + (result === 'tie'),
      loss: this.state.loss + (result === 'ai'),
    });
  }

  render() {
    return (
      <div className="App">
        <Menu win={this.state.win} tie={this.state.tie} loss={this.state.loss} onReset={this.handleReset}></Menu>
        <Board onResult={this.handleResult}></Board>
      </div>
    );
  }
}

export default App;
