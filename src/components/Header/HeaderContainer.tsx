import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setAuthUserData} from "../../redux/auth-reducer";
import {api} from "../../api/api";
import {AppRootStateType} from "../../redux/redux-store";


function HeaderContainer(props: any) {

    return (
        <Header {...props}/>
    )

}

const mapStateToProps = (state: AppRootStateType) => ({

        isAuth: state.auth.isAuth, login: state.auth.login

})



export default connect(mapStateToProps, {setAuthUserData, logout})(HeaderContainer);
