import React, { Component } from "react";
import SignupOne from "./signupOne";
import SignupTwo from "./signupTwo";
import SignupThree from "./signupThree";
import SignupComplete from "./signupComplete";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HOST: "http://127.0.0.1:8000/",
            stage: 1,
            email: "",
            username: "",
            password: "",
            confPassword: "",
            instruments: [],
            genres: [],
            band_exp: "",
            age: "",
            town: "",
            bio: "",
            images: [],
            music_url: "",
            facebook_url: "",
            twitter_url: "",
            instagram_url: "",
            lat_long: "",
            loc_limit: 50
        }
    }


    //function to switch stage to next stage in multi-form signup
    nextStage = () => {
        if(this.checkPasswords() && this.checkForm()){
            const {stage} = this.state;
            this.setState({
                stage: stage + 1
            });
        }
    }

    //function to switch stage to the previous stage in multi-form signup
    prevStage = () => {
        const {stage} = this.state;
        this.setState({
            stage: stage - 1
        })
    }

    //function to handle inputs from each components input fields
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
        console.log(this.state);
    }

    //function to add images from state upon upload in SignupThree
    handleImagesState = (_images) => {
        this.setState({
            images: _images
        });
    }

    //function to add instruments selected to the state
    addProfileExp = (_instruments, _genres) => {
        this.setState({
            instruments: _instruments,
            genres: _genres
        });
    }

    //function to handle inputs on each key being pressed, mainly for number only fields
    handleKeyUp = e => {
        let reg = /^[0-9]{0,2}$/;
        if(!e.target.value.match(reg)){
            alert("Input must be a number!");
            e.target.value = "";

            //if the input field was for band experience, reset the state
            if(e.target.name === "band_exp"){
                this.setState({
                    band_exp: ""
                });
            }
        }
    }

    //function to ensure the two passwords match
    checkPasswords = () => {
        const {password, confPassword} = this.state;
        if(password !== confPassword) {
            alert("Passwords do not match!");
            return false;
        } else {
            return true;
        }
    }

    //get the users location via navigator (asked for in SignupTwo)
    getLocation = () => {
        navigator.geolocation.getCurrentPosition((pos) =>{
            let locString = pos.coords.latitude + "," + pos.coords.longitude;
            this.setState({
                lat_long: locString
            });
        }, (err) =>{
            alert("There was an error getting your location, you cannot complete signup without giving your location." +
                "\nPlease refresh the page and change your settings to allow location\n" + err.code + "\n" + err.message);
        }, {enableHighAccuracy:true, maximumAge: 60000});
    }

    //function to check all input fields have been filled in correctly
    checkForm = () => {
        const {email, username, password, confPassword} = this.state;
        let emailValidity = /^[A-Za-z0-9.]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
        if(email === "") {
            alert("Email is empty!");
            return false;
        } else if (!email.match(emailValidity)){
            alert("Email is invalid!");
            return false;
        } else if (username === ""){
            alert("Username is empty!");
            return false;
        } else if (password === ""){
            alert("Password is empty!");
            return false;
        } else if (confPassword === "") {
            alert("Password confirmation is empty!");
            return false;
        } else if (username.length < 6) {
            alert("Username must be at least six characters!");
            return false;
        }  else if(password.length < 8) {
            alert("Password must be at least 8 characters!");
            return false;
        } else {
            return true;
        }
    }

    checkExists = () => {
        fetch(this.state.HOST + 'check_user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email
            })
        }).then(response => {
            //if the response is successful or a 406 is returned
            if (response.ok || response.status === 406) {
                return response.json();
            } else {
                return false;
            }
        }).then(data => {
            if(data['pass']){
                this.nextStage();
            } else if (data['email_username']){
                alert('This email and username are already associated with another account!');
                return false;
            } else if (data['email']){
                alert('This email is already associated with another account');
                return false;
            } else if (data['username']){
                alert('This username is already associated with another account');
                return false;
            }
        }).catch((error) => {
            throw error;
        })
    }

    registerUser = (e, signupState) => {
        e.preventDefault();
        console.log(signupState);
        //for this optional field, if no value was entered, set to 0
        if (signupState.band_exp === "") {
            signupState.band_exp = 0;
        }

        //for this optional field, if no value was entered, set to null
        if (signupState.age === "") {
            signupState.age = null;
        }
        //first fetch we create the user itself before proceeding
        fetch(this.state.HOST + 'api/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: signupState.username,
                email: signupState.email,
                password: signupState.password,
                profile: {
                    band_exp: signupState.band_exp,
                    age: signupState.age,
                    town: signupState.town,
                    bio: signupState.bio,
                    music_url: signupState.music_url,
                    facebook_url: signupState.facebook_url,
                    twitter_url: signupState.twitter_url,
                    instagram_url: signupState.instagram_url,
                    lat_long: signupState.lat_long,
                    distance_limit: signupState.loc_limit
                },
                genres: signupState.genres,
                instruments: signupState.instruments,
            })
        }).then(response => {
            console.log(response);
            if (response.status === 400) {
                alert(response.status + " " + response.statusText + "\n" +
                    "Please make sure your details such as username and email are correct along with your location allowed!");
            } else if (!response.ok) {
                return false;
            } else if (response.status === 201) {
                return response.json()
            }
        }).then(data => {
            console.log(this.state.images.length);
            if (this.state.images.length > 0) {
                return this.uploadPhotos(data);
            } else {
                return this.nextStage();
            }
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    }

    //function to upload the photos in the profile to the user in the database
    uploadPhotos = (data) => {
        let formdata = new FormData();
        formdata.append("user", data.id);
        for (let i = 0; i < this.state.images.length; i++) {
            formdata.append("images", this.state.images[i].image_file);
        }
        fetch(this.state.HOST + 'api/upload_images/', {
            method: "POST",
            body: formdata
        }).then(response => {
            if(response.status === 400){
            alert(response.status + " " + response.statusText + "\n" +
            "There was an issue uploading your photos!");
            } else if(!response.ok){
                return false;
            } else if(response.status === 201) {
                return this.nextStage();
            }
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    }

    render() {
        const {stage} = this.state;
        const {
            email, username, password, confPassword, band_exp,
            age, town, bio, images, music_url, facebook_url, twitter_url,
            instagram_url, loc_limit
        } = this.state;
        const credentials = {email, username, password, confPassword}
        const musicInfo = {band_exp}
        const miscInfo = {
            age, town, bio, images, music_url, facebook_url,
            twitter_url, instagram_url, loc_limit
        }

        if (stage === 1) {
            return (
                <SignupOne
                    isAuth={this.props.isAuth}
                    nextStage={this.nextStage}
                    handleChange={this.handleChange}
                    credentials={credentials}
                    checkExists={this.checkExists}
                />
            )
        } else if (stage === 2) {
            return (
                <SignupTwo
                    nextStage={this.nextStage}
                    prevStage={this.prevStage}
                    getLocation={this.getLocation}
                    handleChange={this.handleChange}
                    addProfileExp={this.addProfileExp}
                    handleKeyUp={this.handleKeyUp}
                    musicInfo={musicInfo}
                />
            )
        } else if (stage === 3) {
            return (
                <SignupThree
                    nextStage={this.nextStage}
                    prevStage={this.prevStage}
                    handleChange={this.handleChange}
                    handleKeyUp={this.handleKeyUp}
                    miscInfo={miscInfo}
                    handleImagesState={this.handleImagesState}
                    registerUser={(e) => this.registerUser(e, this.state)}
                />
            )
        } else if (stage === 4) {
            return (
                <SignupComplete/>
            )
        }
    }
}

export default Signup;