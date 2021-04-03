import React, { Component, Fragment } from 'react';
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationArrow, faMusic, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import EditProfile from "./editProfile";

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
        },
        distance_limit: "",
        editing: false
    }

    //once the profile component loads in, get the users profile details
    //check to see which is present, a parameter or a prop
    componentDidMount() {

        if(this.props.user_id === localStorage.getItem('id')){
            this.getUser(this.props.user_id);
        } else {
            this.getUser(this.props.match.params.id);
        }

    }

    //function to retrieve the logged in users profile information
    getUser = (id) => {
        let url = 'http://54.155.93.184:8000/api/users/' + id;

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
                    band_exp: json.profile.band_exp,
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
                    },
                    distance_limit: json.profile.distance_limit
                })
            }).catch((error) => {
                console.log(error);
                throw error;
            });
    }

    //function if the user is in the edit screen and wish to go back, change state
    stopEditing = () => {
        this.setState({
            editing: false
        });
    }

    render() {

        return(
            <Fragment>
                { //if the editing variable is false, render just the normal profile
                    this.state.editing === false ?
                    <div>
                        <div className="profileHeading">
                            <h2 style={{display:"inline"}}>{this.state.username}</h2>
                            {//if the prop editable is true, show the Edit button
                                this.props.editable === true ?
                                    <h2 className="editBtn" onClick={() => this.setState({editing:true})} style={{display:"inline", float: "right"}}><FontAwesomeIcon icon={faEdit}/></h2>
                                    : null
                            }
                        </div>
                        <div className="profile">
                            <Carousel>
                                {//map over images[] and add a new Carousel item for each one present
                                    this.state.images.map(img => {
                                    return(
                                        <Carousel.Item
                                            key={`${img}-key`}
                                            style={{textAlign:"center", backgroundColor: "black"}}>
                                            <Image
                                                src={"http://54.155.93.184:8000" + img}
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
                                {this.state.town === "" || this.state.town === null ?
                                    "" : <h5><FontAwesomeIcon icon={faLocationArrow}/> {this.state.town}</h5>
                                }
                                <h5>{this.state.age === "" || this.state.age === null ?
                                    "" : this.state.age + " years old"
                                }</h5>
                                <h5>{this.state.band_exp !== 0 ? this.state.band_exp + " years band experience" :
                                    "No band experience"
                                }</h5>
                            </div>
                            <hr/>
                            <div className="profileContent">
                                <div className="instrumentInfoDiv">
                                    <h5>Instruments</h5>
                                    <table className="musicTable">
                                        <tbody>
                                            {//map over the instruments and add a new table row for each
                                                this.state.instruments.map(instrument => {
                                                return(
                                                    <tr key={`${instrument.instrument}-row`}>
                                                        <td key={`${instrument.name}-cell`}>{instrument.name}</td>
                                                        <td key={`${instrument.experience_level}-cell`}>{instrument.experience_level} years</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="genreInfoDiv">
                                    <h5>Genres</h5>
                                    <table className="musicTable">
                                        <tbody>
                                            {//map over the genres in the state and create a new list element for each
                                                this.state.genres.map(genre => {
                                                return(
                                                    <tr key={`${genre.name}-row`}>
                                                        <td key={`${genre.name}`}>{genre.name}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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
                                                        <td key={"twitter cell"}>
                                                        <a className="socialLink" target="_blank" rel="noopener noreferrer" href={this.state.socials.twitter_url}>
                                                            <h5 className="socialText">
                                                                <FontAwesomeIcon icon={faTwitter}/><br/>Twitter
                                                            </h5>
                                                        </a>
                                                        </td>
                                                    )
                                                } else if (key === "instagram_url" && value !== "" && value !== null){
                                                    return(
                                                        <td key={"instagram cell"}>
                                                            <a className="socialLink" target="_blank" rel="noopener noreferrer" href={this.state.socials.instagram_url}>
                                                                <h5 className="socialText">
                                                                    <FontAwesomeIcon icon={faInstagram}/><br/>Instagram
                                                                </h5>
                                                            </a>
                                                        </td>
                                                    )
                                                } else if (key === "facebook_url" && value !== "" && value !== null){
                                                    return(
                                                        <td key={"facebook cell"}>
                                                            <a className="socialLink" target="_blank" rel="noopener noreferrer" href={this.state.socials.facebook_url}>
                                                                <h5 className="socialText">
                                                                    <FontAwesomeIcon icon={faFacebook}/><br/>Facebook
                                                                </h5>
                                                            </a>
                                                        </td>
                                                    )
                                                } else if (key === "music_url" && value !== "" && value !== null){
                                                    return(
                                                        <td key={"music cell"}>
                                                            <a className="socialLink" target="_blank" rel="noopener noreferrer" href={this.state.socials.music_url}>
                                                                <h5 className="socialText">
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
                            <hr/>
                            <div className="bio">
                                <h5 style={{textAlign:"center"}}>About Me</h5>
                                <p>{this.state.bio}</p>
                            </div>
                        </div>
                    </div>
                    : //if the editing variable is true, render edit profile instead
                        <EditProfile
                            user_details={this.state}
                            stopEditing={this.stopEditing}
                        /> }
            </Fragment>
        )
    }
}

export default withRouter(Profile);