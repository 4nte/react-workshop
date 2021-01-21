import React from 'react';
import path from "path";
import fs from "fs";
import {render, fireEvent} from "@testing-library/react";
const calculatorComponent = path.join(__dirname, './exercise/Calculator.tsx');
const unitInput = path.join(__dirname, './exercise/UnitInput.tsx');

describe('11', () => {
  it('Calculator.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(calculatorComponent)).toBeTruthy();
  });

  it('UnitInput.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(unitInput)).toBeTruthy();
  });

  it('Calculator renders meter input', () => {
    const Calculator = require(calculatorComponent).default;
    const { getByLabelText } = render(<Calculator />);
    expect(getByLabelText(`Enter value in meters:`)).toBeInTheDocument();
  });

  it('Calculator renders feet input', () => {
    const Calculator = require(calculatorComponent).default;
    const { getByLabelText } = render(<Calculator />);
    expect(getByLabelText(`Enter value in feet:`)).toBeInTheDocument();
  });

  it('Calculator conversion works', () => {
    const Calculator = require(calculatorComponent).default;
    const { getByLabelText, getByDisplayValue } = render(<Calculator />);

    fireEvent.change(getByLabelText('Enter value in meters:'), { target: { value: 1 } });
    expect(getByDisplayValue(`3.2808399`)).toBeInTheDocument();

    fireEvent.change(getByLabelText('Enter value in feet:'), { target: { value: 1 } });
    expect(getByDisplayValue(`0.304799999536704`)).toBeInTheDocument();
  });
});
