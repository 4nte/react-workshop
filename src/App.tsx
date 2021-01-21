import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import ExerciseRoutes from "./ExerciseRoutes";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <ExerciseRoutes />
        </BrowserRouter>
      </div>
  );
}

export default App;
