import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {api} from "../../api/api";


function HeaderContainer(props: any) {
    useEffect(() => {
        api.checkAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
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
