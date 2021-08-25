import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {sendMessageAC} from "../../../redux/dialog-reducer";
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {addPostAC} from "../../../redux/profile-reducer";



export type PostType = {
    id: number
    message: string
    likesCount: number
}


export const MyPosts = (props:any) => {

    let postElements = props.posts.map( (p:PostType) => <Post key = {p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={style.posts__block}>
            <h3>My posts</h3>
            <AddNewPost/>
            <div className={style.posts}>
                { postElements }
            </div>
        </div>
    );
};

type FormikErrorType = {
    post?: string
}

export const AddNewPost = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            post: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if(!values.post) {
                errors.post = 'Required';
            } else if (values.post.length > 200) {
                errors.post = 'Sorry, post limits 200 symbols';
            }
            return errors;

        },
        onSubmit: values => {
            dispatch(addPostAC(values.post));
            formik.resetForm()
        },
    })

    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <TextField
                            label="post"
                            margin="normal"
                            variant="filled"
                            name="post"
                            onChange={formik.handleChange}
                            value={formik.values.post}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.post && formik.errors.post && <div style={{color: 'red'}}>{formik.errors.post}</div>}
                        <Button type={'submit'} variant={'contained'} color={'secondary'}>Post</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}
