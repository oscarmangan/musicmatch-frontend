import React, { Component, Fragment } from 'react';
import mmIcon from "../static/mm_icon_gradient.png";

class ProfileWidget extends Component {

    state = {
        username: "test",
    }

    render() {
        return(
            <div className="profileWidget">
                <h4>{this.state.username}</h4>
                <div className="widgetAvatar">
                    <img alt="avatar" src={mmIcon}/>
                </div>
            </div>
        )
    }

}

export default ProfileWidget;