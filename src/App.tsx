import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import {PostType} from "./components/Profile/MyPosts/MyPosts"
import {DialogItemProps} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageItemProps} from "./components/Dialogs/Message/Message";

type AppTypeProps = {
    posts: Array<PostType>
    dialogs: Array<DialogItemProps>
    messages: Array<MessageItemProps>
}

const App = (props: AppTypeProps) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() =><Profile posts={props.posts}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path={'/news'} component={() => <News/>}/>
                    <Route path={'/music'} component={() => <Music/>}/>
                    <Route path={'/settings'} component={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App;
