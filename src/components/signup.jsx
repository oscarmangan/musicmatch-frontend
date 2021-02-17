import React, { Component } from "react";
import SignupOne from "./signupOne";
import SignupTwo from "./signupTwo";
import SignupThree from "./signupThree";

class Signup extends Component {
    state = {
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

    //function to switch stage to next stage in multi-form signup
    nextStage = () => {
        if(this.checkPasswords() && this.checkInputs()){
            const {stage} = this.state;
            this.setState({
                stage: stage + 1
            })
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
        })
    }

    //function to check all input fields have been filled in
    checkInputs = () => {
        const {email, username, password, confPassword, band_exp} = this.state;
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
        } else if (confPassword === ""){
            alert("Password confirmation is empty!");
            return false;
        } else if (band_exp === "") {
            this.setState({
                band_exp: 0
            });
        } else {
            return true;
        }
    }

    render() {
        const {stage} = this.state;
        const {email, username, password, confPassword, band_exp,
                age, town, bio, images, music_url, facebook_url, twitter_url,
                instagram_url, loc_limit} = this.state;
        const credentials = { email, username, password, confPassword }
        const musicInfo = { band_exp }
        const miscInfo = { age, town, bio, images, music_url, facebook_url, twitter_url, instagram_url, loc_limit }
        const {registerUser} = this.props;

        if(stage === 1){
            return(
                <SignupOne
                    nextStage={this.nextStage}
                    handleChange={this.handleChange}
                    credentials={credentials}
                />
            )
        } else if(stage === 2){
            return(
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
        } else if(stage === 3){
            return(
                <SignupThree
                    prevStage={this.prevStage}
                    handleChange={this.handleChange}
                    handleKeyUp={this.handleKeyUp}
                    miscInfo={miscInfo}
                    finishSignup={(e) => registerUser(e, this.state)}
                />
            )
        }
    }
}

export default Signup;