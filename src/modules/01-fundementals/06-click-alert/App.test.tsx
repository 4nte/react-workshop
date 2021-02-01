import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import fs from 'fs';
import path from 'path';
const componentFilePath = path.join(__dirname, './exercise/AlertClick.tsx');

describe('04', () => {
  it('AlertClick.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(componentFilePath)).toBeTruthy();
  });

  it('Renders "Click me" button', () => {
    const AlertClick = require(componentFilePath).default;
    const { getByText } = render(<AlertClick />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('Opens alert on button click', () => {
    const AlertClick = require(componentFilePath).default;
    const { getByText } = render(<AlertClick />);
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    const leftClick = { button: 1 };
    fireEvent.click(getByText('Click me'), leftClick);
    expect(window.alert).toBeCalledTimes(1);
  });

  it('Should render "Button clicked!" in alert', () => {
    const AlertClick = require(componentFilePath).default;
    const { getByText } = render(<AlertClick />);
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    const leftClick = { button: 1 };
    fireEvent.click(getByText('Click me'), leftClick);
    expect(window.alert).toHaveBeenCalledWith('Button clicked!');
  })
});

