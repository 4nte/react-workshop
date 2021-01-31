import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Route, Switch} from "react-router";
import UserDetails from "../solution/UserDetails";
import {users} from "./data";
import UserListItem from "../solution/UserListItem";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="03-react-router/exercise/18">
    </BrowserRouter>
  )
};

export default App
