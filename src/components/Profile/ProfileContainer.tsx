import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {api} from "../../api/api";

type MapStatePropsType = {
    profile: any
}

type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
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
            userId = '15441'
        }
        api.getProfile(userId).then(data => {
            props.setUserProfile(data)
        });
    }, [])


    return (
        <Profile profile={props.profile}/>
    )

}

let mapStateToProps = (state: any): MapStatePropsType => ({profile: state.profilePage.profile})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
