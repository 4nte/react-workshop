import React from 'react';
import Navigation from './Navigation';
import Content from "./Content";

const theme = {
  backgroundColor: '#f0f0f0',
  navigationColor: '#0193e3',
  cardColor: '#c2cbd0',
  reactContextText: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level.'
};

export const ThemeContext = React.createContext(
  theme // default value
);

class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={theme}>
          <Navigation />
          <Content />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App;
