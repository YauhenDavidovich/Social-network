import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {AppStateProps} from "./redux/State";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/State";

export let renderEntireTrees = (state: AppStateProps) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTrees(store.getState())
store.subscribe(renderEntireTrees)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
