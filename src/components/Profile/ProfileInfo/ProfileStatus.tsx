import React from 'react';
import styles from './ProfileInfo.module.css'
import userPhoto from "../../../assets/user-photo.png";


class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
                editMode: true
            }
        )
    }
    deActivateEditMode = () => {
        this.setState({
                editMode: false
            }
        )
    }


    render() {
        return (
            <div>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>}
                {this.state.editMode &&
                <div><input autoFocus={true} onBlur ={this.deActivateEditMode} value={this.props.status}/></div>}
            </div>
        );
    }
};

export default ProfileStatus;
