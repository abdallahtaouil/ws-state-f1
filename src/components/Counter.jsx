import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  //   let counter = 0;
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    this.setState({
      counter: this.state.counter > 0 ? this.state.counter - 1 : 0,
    });
  };
  reset = () => {
    this.setState({ counter: 0 });
  };
  render() {
    return (
      <div>
        <button className="increment-btn mx-2" onClick={this.increment}>
          +
        </button>
        <span>{this.state.counter}</span>
        <button className="decrement-btn mx-2" onClick={this.decrement}>
          -
        </button>
        <div>
          <button className="reset-btn" onClick={this.reset}>
            Reset
          </button>
        </div>
        <h2>timer: 0</h2>
      </div>
    );
  }
}

export default Counter;
