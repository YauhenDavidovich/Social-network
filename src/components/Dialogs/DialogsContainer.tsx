import React, {ChangeEvent} from 'react';
import style from './Diaologs.module.css'
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/State";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateTopProps = (state: any) => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
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
