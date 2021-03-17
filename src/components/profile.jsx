import React, { Component, Fragment } from 'react';
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

class Profile extends Component {
    state = {
        info: {
            username: "",
            email: "",
            town: "",
            age: "",
            bio: "",
            band_exp: "",
            facebook_url: "",
            twitter_url: "",
            instagram_url: "",
            music_url: "",
        },
        musicInfo: {
            genres: [],
            instruments: [],
            band_exp: ""
        },
        images: []
    }

    //once the profile component loads in, get the users profile details
    componentDidMount() {
        this.getRecommendations(this.props.user_id)
    }

    //function to retrieve the logged in users profile information
    getRecommendations = (id) => {
        let url = 'http://127.0.0.1:8000/api/users/' + id;

        //perform the GET request to the URL to retrieve the profile
        fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else if(response.status === 400) {
                    throw response;
                } else if(!response.ok) {
                    return false;
                }
            }).then(json => {
                //add the JSON data into the state which will display said information
                console.log(json);
                this.setState({
                    username: json.username,
                    email: json.email,
                    town: json.profile.town,
                    bio: json.profile.bio,
                    images: json.images,
                })
            }).catch((error) => {
                console.log(error);
                throw error;
            });
    }

    render() {
        return(
            <Fragment>
                <h2>{this.state.username}</h2>
                <div className="profile">
                    <Carousel>
                        {this.state.images.map(img => {
                            return(
                                <Carousel.Item key={`${img}-key`}>
                                    <Image
                                        src={"http://127.0.0.1:8000" + img}
                                        alt={"profile image"}
                                        className="carouselImg"
                                        fluid
                                    />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </Fragment>
        )
    }
}

export default Profile;