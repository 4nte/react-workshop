import React from 'react';
/* Import your component here */
import {Provider, useDispatch, useSelector, useStore} from "react-redux";
import {store} from "./store";
import {calculatorSlice, selectValue} from "./calculatorSlice";


function Calculator() {
    const counter = useSelector(selectValue);
    const dispatch = useDispatch();
    return <div>
        {counter}
        <button onClick={() => dispatch(calculatorSlice.actions.add(2))}>Increment</button>
    </div>
}

function App() {
    return <div>
        <Provider store={store}>
            <Calculator/>
        </Provider>
    </div>
}

export default App;