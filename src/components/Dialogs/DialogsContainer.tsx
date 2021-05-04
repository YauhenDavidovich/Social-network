import React, {ChangeEvent} from 'react';
import style from './Diaologs.module.css'
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/State";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {DialogInitialStateType} from "../../redux/dialog-reducer";

type MapStatePropsType = {
    dialogPage: DialogInitialStateType
}

type MapDispatchPropsType = {
    updateNewMessageBody: () => void,
    sendMessage: (body: string) => void
}



let mapStateTopProps = (state: AppRootStateType): MapStatePropsType=> {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageAC())
        },
        sendMessage: (body: any) => {
            dispatch(updateNewMessageBodyAC(body))
        }
    }
}

const DialogsContainer = connect(mapStateTopProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer
