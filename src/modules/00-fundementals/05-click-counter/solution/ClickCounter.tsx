import React from 'react';


type CounterState = {
  counter: number
}

class ClickCounter extends React.Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
      this.state = {
        counter: 0
      }
  }

  handleAddClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  };

  handleSubtractClick = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <>
        <p>{this.state.counter}</p>
        <button onClick={this.handleAddClick}>Add</button>
        <button onClick={this.handleSubtractClick}>Subtract</button>
      </>
    )
  }
}

export default ClickCounter;
