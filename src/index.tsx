import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import App from "./App";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import MainApp from "./App";


ReactDOM.render(
    <HashRouter>
        <React.StrictMode>
            <Provider store={store}>
                <MainApp/>
            </Provider>
        </React.StrictMode>
    </HashRouter>
    , document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
