import React, {useEffect, useState} from 'react';
import styles from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
    status:string
    updateStatus: (status:string) => void
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }




    return <div>
    {!editMode && <div>
        <span onDoubleClick={activateEditMode}>{status || "undefined status"}</span>
    </div>}
    {editMode && <div>
        <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} value={status}/></div>}
</div>

}

// class ProfileStatus extends React.Component<any, any> {
//     state = {
//         editMode: false,
//         status: this.props.status
//
//     }
//     activateEditMode = () => {
//         this.setState({
//                 editMode: true
//             }
//         )
//     }
//     deActivateEditMode = () => {
//
//         this.setState({
//             editMode: false
//             }
//         )
//         this.props.updateStatus(this.state.status)
//     }
//
//     componentDidUpdate(prevProps: any, prevState: any) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                     status: this.props.status
//                 }
//             )
//         }
//     }
//
//     onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//     }
//
//
//     render() {
//         return (
//             <div>
//                 {!this.state.editMode && <div>
//                     <span onDoubleClick={this.activateEditMode}>{this.props.status || "undefined status"}</span>
//                 </div>}
//                 {this.state.editMode && <div>
//                     <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}/></div>}
//             </div>
//         );
//     }
// };

export default ProfileStatus;
