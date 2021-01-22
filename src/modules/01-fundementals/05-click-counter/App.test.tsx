import React from 'react';
import path from "path";
import fs from "fs";
import {fireEvent, render} from "@testing-library/react";
const componentFilePath = path.join(__dirname, './exercise/ClickCounter.tsx');

describe('05', () => {
  it('ClickCounter.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(componentFilePath)).toBeTruthy();
  });

  it('Renders "Add" button', () => {
    const ClickCounter = require(componentFilePath).default;
    const { getByText } = render(<ClickCounter />);
    expect(getByText('Add')).toBeInTheDocument();
  });

  it('Renders "Subtract" button', () => {
    const ClickCounter = require(componentFilePath).default;
    const { getByText } = render(<ClickCounter />);
    expect(getByText('Subtract')).toBeInTheDocument();
  });

  it('Renders count number', () => {
    const ClickCounter = require(componentFilePath).default;
    const { getByText } = render(<ClickCounter />);
    expect(getByText('0')).toBeInTheDocument();
  });

 it('Should update counter on Add button click', () => {
   const ClickCounter = require(componentFilePath).default;
   const { getByText } = render(<ClickCounter />);
   expect(getByText('0')).toBeInTheDocument();

   const leftClick = { button: 1 };
   fireEvent.click(getByText('Add'), leftClick);
   expect(getByText('1')).toBeInTheDocument();
 });

  it('Should update counter on Subtract button click', () => {
    const ClickCounter = require(componentFilePath).default;
    const { getByText } = render(<ClickCounter />);
    expect(getByText('0')).toBeInTheDocument();

    const leftClick = { button: 1 };
    fireEvent.click(getByText('Subtract'), leftClick);
    expect(getByText('-1')).toBeInTheDocument();
  })
});
