import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import state, {addPost, AppStateProps} from "./redux/State";

const renderEntireTrees = (state: AppStateProps) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default renderEntireTrees