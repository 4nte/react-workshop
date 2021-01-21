import React from 'react';
import { ThemeContext } from './App';

const Card = () => {
  return (
    <ThemeContext.Consumer>
      {value => (
        <div role="card" style={{background: value.cardColor, borderRadius: '10px', padding: '10px'}}>
          <div><h3>React context</h3></div>
          <div>{value.reactContextText}</div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Card;
