import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {AppStateProps, StoreType} from "./redux/State";
import ReactDOM from "react-dom";
import store, {AppRootStateType} from "./redux/redux-store";
import App from "./App";


export let renderEntireTrees = (props: AppRootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>
        ,
        document.getElementById('root')
    );
}
renderEntireTrees(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderEntireTrees(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
