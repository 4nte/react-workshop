import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Color from './Color';
import Navigation from './Navigation';

const App: React.FC = () => {
  // !!! do not modify location or <BrowserRouter /> tag !!!
  return (
    <BrowserRouter basename="/exercise/17">
      {/* render navigation */}
      {/* render routes */}
      <Navigation />
      <Switch>
        <Route path="/red">
          <Color color="red" />
        </Route>
        <Route path="/blue">
          <Color color="blue" />
        </Route>
        <Route path="/green">
          <Color color="green"/>
        </Route>
        <Route path="/yellow">
          <Color color="yellow"/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
