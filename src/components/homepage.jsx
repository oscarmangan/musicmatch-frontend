import React, { Component, Fragment } from 'react';
import TopNine from "./topNine";

class Homepage extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <h1>Homepage</h1>
                <p>Welcome to musicmatch! This is the first prototype! Use the navigation menu
                to work your way around the site. Below you will find the top nine closest musicians
                to your preferences on your account. You can search the entire userbase either if you
                like too. To edit your profile, click the 'Profile' menu option.</p>

                <h2>Your Top 9</h2>
                <TopNine />
            </Fragment>
        )
    }
}

export default Homepage