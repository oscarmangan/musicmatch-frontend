import React, { Component, Fragment } from 'react';
import { Redirect } from "react-router";
import TopNine from "./topNine";

class Homepage extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                {this.props.isAuth ? <Redirect to='/home'/> : <Redirect to='/login'/>}
                <h1>Homepage</h1>
                <p>Welcome to musicmatch! This is the first prototype! Use the navigation menu
                to work your way around the site. Below you will find the top nine closest musicians
                to your preferences on your account. You can search the entire userbase either if you
                like too. To edit your profile, click the 'Profile' menu option.</p>

                <h2>Your Top Recommendations</h2>
                <TopNine
                    user_id={this.props.user_id}
                />
            </Fragment>
        )
    }
}

export default Homepage