import React, {ChangeEvent} from 'react';
import style from './Diaologs.module.css'

import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {DialogInitialStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialog-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogPage: DialogInitialStateType
}

type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void,
    sendMessage: () => void
}



let mapStateTopProps = (state: AppRootStateType): MapStatePropsType=> {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        }
    }
}


export default withAuthRedirect(connect(mapStateTopProps, mapDispatchToProps)(Dialogs))
