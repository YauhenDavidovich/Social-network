import React from 'react';
import style from './Diaologs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {sendMessageAC} from "../../redux/dialog-reducer";


const Dialogs = (props:any) => {
    let state = props.dialogPage
    let dialogElements = state.dialogs.map((d: { id: number; name: string; }) => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = state.messages.map((m: { id: number; message: string; }) => <Message id={m.id} message={m.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__items}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                <div>{messageElements}</div>
                <div>
                    <AddMessageForm/>
                </div>
            </div>
        </div>
    )

}

type FormikErrorType = {
    message?: string
}

export const AddMessageForm = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if(!values.message) {
                errors.message = 'Required';
            } else if (values.message.length > 200) {
                errors.message = 'Sorry, message limits 200 symbols';
            }
            return errors;

        },
        onSubmit: values => {
            dispatch(sendMessageAC(values.message));
            formik.resetForm()
        },
    })

    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <TextField
                            label="message"
                            margin="normal"
                            variant="filled"
                            name="message"
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.message && formik.errors.message && <div style={{color: 'red'}}>{formik.errors.message}</div>}
                        <Button type={'submit'} variant={'contained'} color={'secondary'}>Send</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}

export default Dialogs;
