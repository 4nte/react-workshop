import React from 'react';
import path from "path";
import fs from "fs";
import { render } from "@testing-library/react";
import frameworkData from "./exercise/data";
const statisticsComponentFilePath = path.join(__dirname, './exercise/Statistics.tsx');
const frameworkComponentFilePath = path.join(__dirname, './exercise/Framework.tsx');

describe('08', () => {
  it('Statistics.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(statisticsComponentFilePath)).toBeTruthy();
  });

  it('Framework.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(statisticsComponentFilePath)).toBeTruthy();
  });

  it('Framework component renders data', () => {
    const Framework = require(frameworkComponentFilePath).default;
    const { getByText } = render(<Framework data={frameworkData[0]} />);
    expect(getByText(`Name: ${frameworkData[0].name}`)).toBeInTheDocument();
    expect(getByText(`Popularity: ${frameworkData[0].popularity}`)).toBeInTheDocument();
    expect(getByText(`GitHub stars: ${frameworkData[0].gitHubStars}`)).toBeInTheDocument();
    expect(getByText(`Ranked: ${frameworkData[0].ranked}`)).toBeInTheDocument();
  });

  it('Statistics renders all data', () => {
    const Statistics = require(statisticsComponentFilePath).default;
    const { getByText } = render(<Statistics />);
    frameworkData.map(data => {
      expect(getByText(`Name: ${data.name}`)).toBeInTheDocument();
      expect(getByText(`Popularity: ${data.popularity}`)).toBeInTheDocument();
      expect(getByText(`GitHub stars: ${data.gitHubStars}`)).toBeInTheDocument();
      expect(getByText(`Ranked: ${data.ranked}`)).toBeInTheDocument();
    })
  });
});
