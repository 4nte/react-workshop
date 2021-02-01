import React from 'react';
import { ThemeContext } from './App';

const navItemStyle = {
  padding: '10px'
};

const Navigation = () => {
  return (
    <ThemeContext.Consumer>
      {value => (
        <div role="navigation" style={{ background: value.navigationColor, display: "flex" }}>
          <div style={navItemStyle}>Home</div>
          <div style={navItemStyle}>About</div>
          <div style={navItemStyle}>Blog</div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Navigation;
