import React, { Component, Fragment } from 'react';
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationArrow, faMusic } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

class Profile extends Component {

    state = {
        username: "",
        email: "",
        town: "",
        age: "",
        bio: "",
        band_exp: "",
        images: [],
        instruments: [],
        genres: [],
        socials: {
            facebook_url: "",
            twitter_url: "",
            instagram_url: "",
            music_url: ""
        }
    }

    //once the profile component loads in, get the users profile details
    componentDidMount() {
        this.getRecommendations(this.props.match.params.id)
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
                this.setState({
                    username: json.username,
                    email: json.email,
                    town: json.profile.town,
                    bio: json.profile.bio,
                    images: json.images,
                    age: json.profile.age,
                    instruments: json.instruments,
                    genres: json.genres,
                    socials: {
                        twitter_url: json.profile.twitter_url,
                        instagram_url: json.profile.instagram_url,
                        facebook_url: json.profile.facebook_url,
                        music_url: json.profile.music_url
                    }
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
                        {//map over images[] and add a new Carousel item for each one present
                            this.state.images.map(img => {
                            return(
                                <Carousel.Item
                                    key={`${img}-key`}
                                    style={{textAlign:"center", backgroundColor: "black"}}>
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
                    <hr/>
                    <div className="profileInfo">
                        <h5><FontAwesomeIcon icon={faEnvelope}/> {this.state.email}</h5>
                        <h5><FontAwesomeIcon icon={faLocationArrow}/> {this.state.town}</h5>
                        <h5>{this.state.age !== "" || this.state.age !== null ?
                            this.state.age + " years old" : ""
                        }</h5>
                    </div>
                    <hr/>
                    <div className="profileContent">
                        <div className="instrumentInfoDiv">
                            <h5>Instruments</h5>
                            <table className="instrumentTable">
                                <tbody>
                                    {//map over the instruments and add a new table row for each
                                        this.state.instruments.map(instrument => {
                                        return(
                                            <tr>
                                                <td>{instrument.instrument}</td>
                                                <td>{instrument.exp} years</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="genreInfoDiv">
                            <h5>Genres</h5>
                            <ul>
                                {//map over the genres in the state and create a new list element for each
                                    this.state.genres.map(genre => {
                                    return(
                                        <li>{genre}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div><br/>
                    <hr/>
                    <div className="socialMedia">
                        <h5 id="socialHeading">Social Media</h5>
                        <table className="socialTable">
                            <tbody>
                                <tr>
                                    {   //method to map over the socials object and append a new link icon if one or more are present
                                        // eslint-disable-next-line array-callback-return
                                        Object.entries(this.state.socials).map(([key, value]) => {
                                        if(key === "twitter_url" && value !== "" && value !== null){
                                            return(
                                                <td>
                                                <a className="socialLink" target="_blank" rel="noopener noreferrer" href={this.state.socials.twitter_url}>
                                                    <h5>
                                                        <FontAwesomeIcon icon={faTwitter}/><br/>Twitter
                                                    </h5>
                                                </a>
                                                </td>
                                            )
                                        } else if (key === "instagram_url" && value !== "" && value !== null){
                                            return(
                                                <td>
                                                    <a className="socialLink" target="_blank" rel="noopener noreferrer" href={this.state.socials.instagram_url}>
                                                        <h5>
                                                            <FontAwesomeIcon icon={faInstagram}/><br/>Instagram
                                                        </h5>
                                                    </a>
                                                </td>
                                            )
                                        } else if (key === "facebook_url" && value !== "" && value !== null){
                                            return(
                                                <td>
                                                    <a className="socialLink" target="_blank" rel="noopener noreferrer" href={this.state.socials.facebook_url}>
                                                        <h5>
                                                            <FontAwesomeIcon icon={faFacebook}/><br/>Facebook
                                                        </h5>
                                                    </a>
                                                </td>
                                            )
                                        } else if (key === "music_url" && value !== "" && value !== null){
                                            return(
                                                <td>
                                                    <a className="socialLink" target="_blank" rel="noopener noreferrer" href={this.state.socials.music_url}>
                                                        <h5>
                                                            <FontAwesomeIcon icon={faMusic}/><br/>My Music
                                                        </h5>
                                                    </a>
                                                </td>
                                            )
                                        }
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Profile);