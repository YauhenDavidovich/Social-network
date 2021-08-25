import React from 'react';
import style from './Diaologs.module.css'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {DialogInitialStateType} from "../../redux/dialog-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getUserProfile} from "../../redux/profile-reducer";


type MapStatePropsType = {
    dialogPage: DialogInitialStateType
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType=> {
    return {
        dialogPage: state.dialogPage
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withAuthRedirect)
(Dialogs)
