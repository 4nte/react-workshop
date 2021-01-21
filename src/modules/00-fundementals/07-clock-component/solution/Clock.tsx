import React from 'react';

type ClockState = {
  time: Date
}

class Clock extends React.Component<{}, ClockState> {
  timerID: any;

  constructor(props: {}) {
    super (props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    // on component first render (mount) setInterval that will call tick() function every second.
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    // before component unmount remove interval that has been set on mounting
    clearInterval(this.timerID);
  }

  // set's state.time to current time
  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
