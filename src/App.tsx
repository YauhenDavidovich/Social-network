import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs, {DialogsTypeProps} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";


const App = (props:any) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() =><Profile posts={props.state.profilePage.posts} addPost={props.addPost}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogPage.dialogs} messages={props.state.dialogPage.messages}/>}/>
                    <Route path={'/news'} component={() => <News/>}/>
                    <Route path={'/music'} component={() => <Music/>}/>
                    <Route path={'/settings'} component={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App;
