import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import {AppStateProps, StoreType} from "./redux/State";
import Profile from "./components/Profile/Profile";


export type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile posts={state.profilePage.posts}
                                                                    dispatch={props.store.dispatch.bind(props.store)}
                                                                    newPostsText={state.profilePage.newPostsText}
                    />}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={state.dialogPage.dialogs}
                                                                    messages={state.dialogPage.messages}
                                                                    newMessageBody={state.dialogPage.newMessageBody}
                                                                    dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path={'/news'} component={() => <News/>}/>
                    <Route path={'/music'} component={() => <Music/>}/>
                    <Route path={'/settings'} component={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App;
