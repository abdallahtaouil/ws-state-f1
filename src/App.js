import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

// main component
class App extends Component {
  state = {
    isVisisble: false,
  };

  toggleVisibility = () => {
    this.setState({
      isVisisble: !this.state.isVisisble,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Workshop State</h1>
        <button className="visibility-btn" onClick={this.toggleVisibility}>
          {this.state.isVisisble === true ? 'Hide' : 'Show'} Counter
        </button>
        {/* {this.state.isVisisble === true ? <Counter /> : ''} */}
        {this.state.isVisisble && <Counter />}
      </div>
    );
  }
}

export default App;
