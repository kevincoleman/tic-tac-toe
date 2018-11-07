import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from './components/game/Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whoseMove: 'X',
    };
    this.switchMove = this.switchMove.bind(this);
  }

  switchMove() {
    this.state.whoseMove === 'X'
      ? this.setState({ whoseMove: 'O' })
      : this.setState({ whoseMove: 'X' });
  }

  render() {
    return (
      <div className="App">
        <Game whoseMove={this.state.whoseMove} switchMove={this.switchMove} />
        <Game whoseMove={this.state.whoseMove} switchMove={this.switchMove} />
        <Game whoseMove={this.state.whoseMove} switchMove={this.switchMove} />
        <Game whoseMove={this.state.whoseMove} switchMove={this.switchMove} />
        <Game whoseMove={this.state.whoseMove} switchMove={this.switchMove} />
        <Game whoseMove={this.state.whoseMove} switchMove={this.switchMove} />
        <Game whoseMove={this.state.whoseMove} switchMove={this.switchMove} />
        <Game whoseMove={this.state.whoseMove} switchMove={this.switchMove} />
        <Game whoseMove={this.state.whoseMove} switchMove={this.switchMove} />
      </div>
    );
  }
}

export default App;
