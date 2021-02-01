import React from 'react';
import path from "path";
import fs from "fs";
import { render } from "@testing-library/react";
import { ThemeContext } from './exercise/App';
const cardPath = path.join(__dirname, './exercise/Card.tsx');
const contentPath = path.join(__dirname, './exercise/Content.tsx');
const navigationPath = path.join(__dirname, './exercise/Navigation.tsx');

describe('12', () => {
  it('Navigation.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(navigationPath)).toBeTruthy();
  });

  it('Content.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(contentPath)).toBeTruthy();
  });

  it('Card.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(cardPath)).toBeTruthy();
  });

  it('Navigation renders Home, About, Blog text', () => {
    const Navigation = require(navigationPath).default;
    const { getByText } = render(<Navigation />);

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Blog')).toBeInTheDocument();
  });

  it('Content renders Card component with text from react context', () => {
    const Content = require(contentPath).default;

    const customTheme = {
      backgroundColor: '#eaf075',
      navigationColor: '#e38c78',
      cardColor: '#d047cb',
      reactContextText: 'Test value.'
    };

    const tree = (
      <ThemeContext.Provider value={customTheme}>
        <Content />
      </ThemeContext.Provider>
    );
    const { getByText } = render(tree);

    // test content
    expect(getByText('Test value.')).toBeInTheDocument();
  });

  it('Context styles used', () => {
    const Content = require(contentPath).default;
    const Navigation = require(navigationPath).default;

    const customTheme = {
      backgroundColor: '#eaf075',
      navigationColor: '#e38c78',
      cardColor: '#d047cb',
      reactContextText: 'Test value.'
    };

    const tree = (
      <ThemeContext.Provider value={customTheme}>
        <Navigation />
        <Content />
      </ThemeContext.Provider>
    );
    const { getByRole } = render(tree);

    // test style
    expect(getByRole('content')).toHaveStyle(`background-color: #eaf075`);
    expect(getByRole('card')).toHaveStyle(`background-color: #d047cb`);
    expect(getByRole('navigation')).toHaveStyle(`background-color: #e38c78`);
  });
});
