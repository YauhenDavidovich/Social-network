import React, {useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";


function HeaderContainer(props: any) {
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            debugger
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                props.setAuthUserData(id, login, email)
            }

        });
    }, [])


    return (
        <Header {...props}/>
    )

}

const mapStateToProps = (state: any) => ({

        isAuth: state.auth.isAuth, login: state.auth.login

})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
