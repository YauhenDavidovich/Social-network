import React from "react";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users2 from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersInitialStateType, UserType} from "../../redux/users-reducer";

type MapStatePropsType = {
    usersPage: UsersInitialStateType

}

type MapDispatchPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType=> {
    return {
        usersPage: state.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users2);

export default UsersContainer
