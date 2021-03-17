import React, { Component, Fragment } from 'react';
import mmIcon from "../static/mm_icon_gradient.png";
import Card from "react-bootstrap/Card";

class ProfileWidget extends Component {

    state = {
        username: this.props.username,
        image: this.props.image,
        distance: this.props.distance,
        score: this.props.score
    }

    render() {
        return(
            <Card style={{textAlign:"center"}}>
                <h4>{this.state.username}</h4>
                <Card.Img src={this.state.image} className="widgetImg" alt="avatar"/>
                <Card.Body>
                    <small>{this.state.distance}km away  |    </small>
                    <small>{Math.round((this.state.score / 3.5) * 100)}% match</small><br/>
                    <button className="widgetButton">View Profile</button>
                </Card.Body>
            </Card>
        )
    }

}

export default ProfileWidget;