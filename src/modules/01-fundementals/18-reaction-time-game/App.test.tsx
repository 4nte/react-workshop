import React from 'react';
import { render } from '@testing-library/react';
import fs from 'fs';
import path from 'path';
const componentFilePath = path.join(__dirname, './exercise/Clock.tsx');

describe('07', () => {
  it('Clock.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(componentFilePath)).toBeTruthy();
  });

  it('Clock.tsx exports a component', () => {
    // Assert if file actually exports a component
    const component = require(componentFilePath).default;
    expect(component).toBeTruthy();
  });

  it('Renders a clock with correct time', async () => {
    const Clock = require(componentFilePath).default;
    const { getByText } = render(<Clock />);
    let time = new Date();
    expect(getByText(time.toLocaleTimeString())).toBeInTheDocument();
  });
});

