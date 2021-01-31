import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {users} from "../exercise/data";
import UserListItem from "./UserListItem";
import {Route, Switch} from "react-router";
import UserDetails from "./UserDetails";

const App: React.FC = () => {
  // !!! do not modify location or <BrowserRouter /> tag !!!
  return (
    <BrowserRouter basename="/03-react-router/exercise/18">
      <Switch>
        <Route path="/user/:id" component={UserDetails}/>
        <Route path={`/`} exact>
            {
                users.map(user =>
                    <UserListItem
                        key={user.id}
                        id={user.id}
                        username={user.username}
                    />)
            }
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default App
