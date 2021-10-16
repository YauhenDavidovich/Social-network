import React, {Component, ComponentType} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginForm from "./components/Login/LoginForm";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initialiseApp} from "./redux/app-reducer";
import store, {AppRootStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component<any, any> {
    componentDidMount() {
        // @ts-ignore
        this.props.initialiseApp()
    }

    render() {

        // // @ts-ignore
        if(!this.props.initialised){ return <Preloader/>}
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path={'/profile/:usrID?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/news'} component={() => <News/>}/>
                        <Route path={'/music'} component={() => <Music/>}/>
                        <Route path={'/settings'} component={() => <Settings/>}/>
                        <Route path={'/login'} component={() => <LoginForm/>}/>
                    </div>
                </div>
            </BrowserRouter>

        )
    }
}

type MapStateToPropsType = {
    initialised: boolean
}

const mapStateToProps = (state:AppRootStateType):MapStateToPropsType =>({
    initialised: state.app.initialised
})
let AppContainer = compose<ComponentType>(withRouter, connect(mapStateToProps, {initialiseApp}))(App);


const MainApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default MainApp
