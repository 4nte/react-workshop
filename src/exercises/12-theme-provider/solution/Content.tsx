import React from 'react';
import { ThemeContext } from './App';
import Card from "./Card";

const Content = () => {
  return (
    <ThemeContext.Consumer>
      { value => (
        <div role="content" style={{ backgroundColor: value.backgroundColor }}>
          <h1>Content</h1>
          <Card />
        </div>
      )
      }
    </ThemeContext.Consumer>
  );
};

export default Content;
