import React from 'react';

type CounterState = {
  counter: number
}

class BuggedCounter extends React.Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  handleAddClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleSubtractClick = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    if (this.state.counter === 5 || this.state.counter === -5) {
      // Simulate a JS error
      throw new Error('I crashed! 😠');
    }
    return (
      <>
        <p>{this.state.counter}</p>
        <button onClick={this.handleAddClick}>Add</button>
        <button onClick={this.handleSubtractClick}>Subtract</button>
      </>
    )
  }
}

export default BuggedCounter;
