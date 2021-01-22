import React from 'react';
import 'jest-styled-components'
import { BrowserRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import fs from "fs";
import path from "path";
const colorComponent = path.join(__dirname, './exercise/Color.tsx');
import App from './exercise/App';


describe('16', () => {
  it('Color.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(colorComponent)).toBeTruthy();
  });

  it('Color renders color name', () => {
    const Color = require(colorComponent).default;
    const { getByText } = render(<Color color="red" />);
    expect(getByText("red")).toBeInTheDocument();
  });

  it('Color has background-color', () => {
    const Color = require(colorComponent).default;
    const { container } = render(<Color color="red" />);
    expect(container.firstChild).toHaveStyleRule('background-color', 'red');
  });

  it('Navigation.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(colorComponent)).toBeTruthy();
  });

  it('App renders Navigation & all navigation links', () => {
    const { getByText } = render(<BrowserRouter><App /></BrowserRouter>);
    expect(getByText("Red")).toBeInTheDocument();
    expect(getByText("Blue")).toBeInTheDocument();
    expect(getByText("Green")).toBeInTheDocument();
    expect(getByText("Yellow")).toBeInTheDocument();
  });
});
