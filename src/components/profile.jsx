import React, { Component, Fragment } from 'react';

class Profile extends Component {
    state = {
        info: {
            username: this.props.uname,
            email: "",
            phone: "",
            town: "",
            age: "",
            bio: ""
        },
        musicInfo: {
            genres: [],
            instruments: [],
            band_exp: ""
        }
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
                            <h6>Username: <b>{this.state.info.username}</b></h6>
                            <h6>Email: {this.state.info.email}</h6>
                            <h6>Phone Number: {this.state.info.phone}</h6>
                            <h6>Town: {this.state.info.town}</h6>
                            <h6>Age: {this.state.info.age}</h6>
                            <h6>Bio</h6>
                            <p>{this.state.info.bio}</p>
                        </div>
                        <div className="profileInfo">
                            <h3>Music</h3>
                            <h6>Genres:</h6>
                            <ul>

                            </ul>
                            <h6>Instruments:</h6>
                            <ul>

                            </ul>
                            <h6>Band Experience: {this.state.musicInfo.band_exp}</h6>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Profile;