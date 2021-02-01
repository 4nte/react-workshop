import React, {ChangeEvent, Component} from 'react';
import UnitInput from "./UnitInput";

class Calculator extends Component {
  state = {
    meter: 0,
    feet: 0
  };

  handleMeterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    this.setState({
      meter: value,
      feet: value * 3.2808399
    });
  };

  handleFeetChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    this.setState({
      meter: value / 3.2808399,
      feet: value
    });
  };

  render() {
    return (
      <div>
        <UnitInput value={this.state.meter} handleChange={this.handleMeterChange} unit="m" />
        <UnitInput value={this.state.feet} handleChange={this.handleFeetChange} unit="ft" />
      </div>
    );
  }
}

export default Calculator;
