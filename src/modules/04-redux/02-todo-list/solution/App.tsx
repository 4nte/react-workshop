import React, {useEffect} from 'react';
/* Import your component here */
import {Provider, useDispatch, useSelector, useStore} from "react-redux";
import {store} from "./store";
import Home from "../Home";

function App() {

    return <div>
        <Provider store={store}>
            <Home/>
        </Provider>
    </div>
}

export default App;