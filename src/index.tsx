import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, AppStateProps, subscribe, updateNewPostText} from "./redux/State";
import ReactDOM from "react-dom";
import App from "./App";

export let renderEntireTrees = (state: AppStateProps) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTrees(state)
subscribe(renderEntireTrees)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
