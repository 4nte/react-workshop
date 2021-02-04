import React from 'react';
import { render } from '@testing-library/react';
import fs from 'fs';
import path from 'path';
const componentFilePath = path.join(__dirname, './exercise/Hello.jsx');

describe('01', () => {
  it('Hello.jsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(componentFilePath)).toBeTruthy();
  });

  it('Hello.jsx exports a component', () => {
     // Assert if file actually exports a component
     const component = require(componentFilePath).default;
     expect(component).toBeTruthy();
  });

  it('renders a welcome message', () => {
    const Hello = require(componentFilePath).default;
    const { getByText } = render(<Hello name="John"/>);
    expect(getByText('Hello, John!')).toBeInTheDocument();
  });

  it('renders a short version', () => {
    const Hello = require(componentFilePath).default;
    const { getByText } = render(<Hello name="John" short/>);
    expect(getByText('Hi, John!')).toBeInTheDocument();
  });
})

