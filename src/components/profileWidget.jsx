import React, { Component, Fragment } from 'react';
import mmIcon from "../static/mm_icon_gradient.png";

class ProfileWidget extends Component {

    state = {
        username: this.props.username,
        image: this.props.image,
        distance: this.props.distance,
        score: this.props.score
    }

    render() {
        return(
            <div className="profileWidget">
                <h4>{this.state.username}</h4>
                <img src={this.state.image} className="widgetImg" alt="avatar"/>
                <small>{this.state.distance}km away  |    </small>
                <small>{Math.round((this.state.score / 3.5) * 100)}% match</small><br/>
                <button className="widgetButton">View Profile</button>
            </div>
        )
    }

}

export default ProfileWidget;