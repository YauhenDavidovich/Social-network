import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
    {id:1, message:"Hi", likesCount: 4},
    {id:2, message:"Hey", likesCount: 14},
    {id:3, message:"Good day!", likesCount: 24},
    {id:4, message:"Yo!", likesCount: 5},
]

let dialogs = [
    {id: 1, name: "Peter"},
    {id: 2, name: "Olga"},
    {id: 3, name: "Jack"},
    {id: 4, name: "Tomas"},
]

let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "Hi!"},
    {id: 3, message: "Whatsup!"},
    {id: 4, message: "Hey!"},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
