import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {AppStateProps, StoreType} from "./redux/State";
import ReactDOM from "react-dom";
import store, {AppRootStateType} from "./redux/redux-store";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>

        </React.StrictMode>
    </BrowserRouter>
    , document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
