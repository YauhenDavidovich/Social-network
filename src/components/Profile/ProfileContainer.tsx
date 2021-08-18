import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {updateStatus, getStatus, getUserProfile, ProfileResponseType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    profile:ProfileResponseType
    status:string

}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus:(status: string) => void
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
            userId = "15441";
        }
        props.getUserProfile(userId);
        props.getStatus(userId);
    }, [])
    return (
        <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    )
}

let mapStateToProps = (state: any): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus} ),
    withRouter,
    withAuthRedirect)
(ProfileContainer)
