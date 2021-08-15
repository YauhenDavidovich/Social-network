import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect, useDispatch, useSelector} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileResponseType} from "../../api/api";
import {AppRootStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    profile:ProfileResponseType
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: any
}
type PathParamsType = {
    usrID: string
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

function ProfileContainer(props: PropsType) {

    useEffect(() => {
        let userId = props.match.params.usrID
        if(!userId) {
            userId = "2";
        }
        props.getUserProfile(userId)
    }, [])
    if(!props.isAuth) {
        return <Redirect to={'/login'}/>
    }
    return (
        <Profile profile={props.profile}/>
    )

}

let mapStateToProps = (state: any): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile} )(WithUrlDataContainerComponent);
