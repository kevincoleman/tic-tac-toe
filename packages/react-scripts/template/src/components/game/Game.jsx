import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spaceValue: '',
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.playMove();
  }

  playMove() {
    if (this.state.spaceValue === '') {
      let played = this.props.whoseMove;
      let whose;
      this.props.whoseMove === 'X' ? (whose = 'O') : (whose = 'X');
      this.props.switchMove();
      this.setState({ spaceValue: played });
    }
  }

  render() {
    return (
      <button onClick={this.handleButtonClick}>{this.state.spaceValue}</button>
    );
  }
}

export default Game;
