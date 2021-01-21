import React from 'react';
import { render } from '@testing-library/react';
import fs from 'fs';
import path from 'path';
const componentFilePath = path.join(__dirname, './exercise/CarInfo.tsx');
const appFilePath = path.join(__dirname, './exercise/App.tsx');


describe('03', () => {
  it('CarInfo.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(componentFilePath)).toBeTruthy();
  });

  it('CarInfo.tsx exports a component', () => {
    // Assert if file actually exports a component
    const component = require(componentFilePath).default;
    expect(component).toBeTruthy();
  });

  it('Renders CarInfo correctly', async () => {
    const CarInfo = require(componentFilePath).default;
    const { getByText } = render(<CarInfo model={"A5"} make={"Audi"} color={"blue"} />);
    expect(getByText('Make: Audi')).toBeInTheDocument();
    expect(getByText('Model: A5')).toBeInTheDocument();
    expect(getByText('Color: blue')).toBeInTheDocument();
  });

  it('Renders 2 CarInfos correctly', async () => {
    const App = require(appFilePath).default;
    const { getByText } = render(<App />);
    // 1. Car
    expect(getByText('Make: Audi')).toBeInTheDocument();
    expect(getByText('Model: A5')).toBeInTheDocument();
    expect(getByText('Color: blue')).toBeInTheDocument();

    // 2. Car
    expect(getByText('Make: Honda')).toBeInTheDocument();
    expect(getByText('Model: Civic')).toBeInTheDocument();
    expect(getByText('Color: white')).toBeInTheDocument();
  });
});

