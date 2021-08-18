import React from 'react';
import styles from './ProfileInfo.module.css'

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status: this.props.status

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
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                    status: this.props.status
                }
            )
        }
    }

    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "undefined status"}</span>
                </div>}
                {this.state.editMode && <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}/></div>}
            </div>
        );
    }
};

export default ProfileStatus;
