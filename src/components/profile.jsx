import React, { Component, Fragment } from 'react';

class Profile extends Component {
    state = {

    }

    render() {
        return(
            <Fragment>
                <h2>Profile</h2>
                <div className="profile">
                    <div className="profileGallery">
                        <h4>Gallery</h4>
                    </div>
                    <div className="profileContent">
                        <div className="profileInfo">
                            <h3>Info</h3>
                            <h6>Username: {this.props.uname}</h6>
                            <h6>Email: {this.props.email}</h6>
                            <h6>Phone Number: 089 123123123</h6>
                            <h6>Town: Dublin</h6>
                            <h6>Age: 21</h6>
                            <h6>Bio</h6>
                            <p>This is a sample bio, the user can input a little description about themselves
                            along with links to any social media if they wish to do so.</p>
                        </div>
                        <div className="profileInfo">
                            <h3>Music</h3>
                            <h6>Genres:</h6>
                            <ul>
                                <li>Rock</li>
                                <li>Metal</li>
                                <li>Electronic</li>
                            </ul>
                            <h6>Instruments:</h6>
                            <ul>
                                <li>Electric Guitar - 3 years</li>
                                <li>Acoustic Guitar - 6 years</li>
                            </ul>
                            <h6>Band Experience: 3 years</h6>
                        </div>
                    </div>
                    <div className="profileMusic">
                        <h3>Music Samples</h3>
                        <h5>Sample 1:</h5>
                        <h5>Sample 2:</h5>
                        <h5>Sample 3:</h5>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Profile;