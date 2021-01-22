import React from 'react';
import path from "path";
import fs from "fs";
import {fireEvent, render} from "@testing-library/react";
const componentFilePath = path.join(__dirname, './exercise/FavoriteColor.tsx');

describe('06', () => {
  it('FavoriteColor.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(componentFilePath)).toBeTruthy();
  });

  it('Renders "blue" button', () => {
    const FavoriteColor = require(componentFilePath).default;
    const { getByText } = render(<FavoriteColor />);
    expect(getByText('blue')).toBeInTheDocument();
  });

  it('Renders "red" button', () => {
    const FavoriteColor = require(componentFilePath).default;
    const { getByText } = render(<FavoriteColor />);
    expect(getByText('red')).toBeInTheDocument();
  });

  it('Renders "green" button', () => {
    const FavoriteColor = require(componentFilePath).default;
    const { getByText } = render(<FavoriteColor />);
    expect(getByText('green')).toBeInTheDocument();
  });

  it('Renders "yellow" button', () => {
    const FavoriteColor = require(componentFilePath).default;
    const { getByText } = render(<FavoriteColor />);
    expect(getByText('yellow')).toBeInTheDocument();
  });

  it('Renders "My favorite color" text', () => {
    const FavoriteColor = require(componentFilePath).default;
    const { getByText } = render(<FavoriteColor />);
    expect(getByText('My favorite color is red.')).toBeInTheDocument();
  });

  it('Should update color on blue button click', () => {
    const FavoriteColor = require(componentFilePath).default;
    const { getByText } = render(<FavoriteColor />);

    const leftClick = { button: 1 };
    fireEvent.click(getByText('blue'), leftClick);
    expect(getByText('My favorite color is blue.')).toBeInTheDocument();
  });

  it('Should update color on red button click', () => {
    const FavoriteColor = require(componentFilePath).default;
    const { getByText } = render(<FavoriteColor />);

    const leftClick = { button: 1 };
    fireEvent.click(getByText('blue'), leftClick);
    fireEvent.click(getByText('red'), leftClick);
    expect(getByText('My favorite color is red.')).toBeInTheDocument();
  });

  it('Should update color on green button click', () => {
    const FavoriteColor = require(componentFilePath).default;
    const { getByText } = render(<FavoriteColor />);

    const leftClick = { button: 1 };
    fireEvent.click(getByText('green'), leftClick);
    expect(getByText('My favorite color is green.')).toBeInTheDocument();
  });

  it('Should update color on yellow button click', () => {
    const FavoriteColor = require(componentFilePath).default;
    const { getByText } = render(<FavoriteColor />);

    const leftClick = { button: 1 };
    fireEvent.click(getByText('yellow'), leftClick);
    expect(getByText('My favorite color is yellow.')).toBeInTheDocument();
  });
});
