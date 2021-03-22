import React, { Component } from 'react';
import InstrumentsForm from "./instrumentsForm";
import GenresForm from "./genresForm";
import {Button, Modal} from "react-bootstrap";
import { withRouter } from "react-router";
import Spinner from "react-bootstrap/Spinner";


class EditProfile extends Component {
    state = {
        age: this.props.user_details.age,
        bio: this.props.user_details.bio,
        facebook_url: this.props.user_details.socials.facebook_url,
        instagram_url: this.props.user_details.socials.instagram_url,
        twitter_url: this.props.user_details.socials.twitter_url,
        music_url: this.props.user_details.socials.music_url,
        town: this.props.user_details.town,
        distance_limit: this.props.user_details.distance_limit,
        rec_variable_change: false,
        genreCount: this.props.user_details.genres.length,
        instrCount: this.props.user_details.instruments.length,
        instruments: this.props.user_details.instruments,
        genres: this.props.user_details.genres,
        band_exp: this.props.user_details.band_exp,
        show: false,
        buttonText: "Save Changes",
        generating: false
    }

    //function to handle inputs from each of the input fields
    handleChange = input => e => {
        //if the distance_limit or band_exp has been changed, then this means set recommendations must
        //be called again as this variable alters which recommendations are shown
        if(input === 'distance_limit' || input === 'band_exp') {
            this.setState({
                [input]: e.target.value,
                rec_variable_change: true
            });
        //otherwise, just change the value of the variable
        } else {
            this.setState({
                [input]: e.target.value,
            });
        }
    }

    //function to check all input fields have been filled in correctly
    checkForm = () => {
        const {music_url, facebook_url, instagram_url, twitter_url} = this.state;

        if (facebook_url !== "" && facebook_url !== null && !facebook_url.match(/https?:\/\/(www\.)?facebook\.com\//)) {
            alert("Facebook link is not acceptable! Make sure it follows the format: \n\n" +
                "http(s)://www.facebook.com/(username)");
            return false;
        } else if (music_url !== "" && music_url !== null && !music_url.match(/https?:\/\/(www\.)?[a-zA-Z0-9-]+\.com/)) {
            alert("Music link is not acceptable! Make sure it follows the format: \n\n" +
                "http(s)://www.music_url.com...");
            return false;
        } else if (twitter_url !== "" && twitter_url !== null && !twitter_url.match(/https?:\/\/(www\.)?twitter\.com\//)) {
            alert("Twitter link is not acceptable! Make sure it follows the format: \n\n" +
                "http(s)://www.twitter.com/(username)");
            return false;
        } else if (instagram_url !== "" && instagram_url !== null && !instagram_url.match(/https?:\/\/(www\.)?instagram\.com\//)) {
            alert("Instagram link is not acceptable! Make sure it follows the format: \n\n" +
                "http(s)://www.instagram.com/(username)");
            return false;
        } else {
            return true;
        }
    }

    //function to increment or decrement the number of boxes checked
    //and add/delete the instrument checked/unchecked to the state
    onInstrumentChange = e => {

        //firstly, indicate that the recommender engine must be called now
        this.setState({
            rec_variable_change: true
        });

        if(e.target.checked){
            this.setState((prevState) => ({
                instrCount: prevState.instrCount + 1,
                //add the new object to the array
                instruments: [...this.state.instruments, {
                    instrument: e.target.value,
                    name: e.target.name,
                    experience_level: "",
                }]
            }));
        } else {
            let ins = [...this.state.instruments];
            let index = ins.findIndex(i => i.instrument === parseInt(e.target.value) || i.instrument === e.target.value);
            //check the index status and splice it from ins
            if(index !== -1){
                ins.splice(index, 1);
                this.setState((prevState) => ({
                    instrCount: prevState.instrCount - 1,
                    instruments: ins,
                }));
            }
        }
    }

    //if the user has checked at least 1 instrument and 1 genre
    //display the modal, otherwise keep hidden until validation met
    handleModal = (display) => {
        if(this.checkboxValidation() && this.checkForm()){
            this.setState({
                show: display
            });
        } else {
            return false;
        }
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

    //function to increment or decrement the number of boxes checked
    //and add/delete the genre checked/unchecked to the state
    onGenreChange = e => {

        //firstly, indicate that the recommender engine must be called now
        this.setState({
            rec_variable_change: true
        });

        if(e.target.checked){
            this.setState((prevState) => ({
                genreCount: prevState.genreCount + 1,
                genres: [...this.state.genres, {"genre": e.target.value}],
            }));
        } else {
            let gen = [...this.state.genres];
            let index = gen.findIndex(i => i.genre === parseInt(e.target.value) || i.genre === e.target.value);
            //check the index status and splice it from gen
            if(index !== -1){
                gen.splice(index, 1);
                this.setState((prevState) => ({
                    genreCount: prevState.genreCount - 1,
                    genres: gen,
                }));
            }
        }
    }

    //function to ensure at least one box has been checked from each option
    checkboxValidation = () => {
        const {genreCount, instrCount} = this.state;
        if(!instrCount > 0){
            alert("You must select at least 1 instrument!");
            return false;
        } else if(!genreCount > 0){
            alert("You must select at least 1 genre!");
            return false;
        } else {
            return true;
        }
    }

    //get the experience inputs from the modal and create objects in the array
    setExp = (e) => {
        let thisExp = e.target.value;
        //create a mutable copy of the instruments array
        //find the index where the name matches the obj name
        let instrArr = [...this.state.instruments];
        let index = instrArr.findIndex(i => i.name === e.target.name.slice(0,-4))
        instrArr[index] = {
            instrument: e.target.id,
            name: e.target.name.slice(0, -4),
            experience_level: thisExp
        };
        //if the index is existent, overwrite the old state with the new array
        if(index !== -1){
            this.setState({
                instruments: instrArr
            });
        }
    }

    //function to ensure the user has input an experience level
    //for each instrument they have checked
    checkExp = () => {
        let reg = /^[0-9]{1,2}$/;
        for(let i=0; i < this.state.instruments.length; i++){
            //must cast this as string for the Regex to work without runtime error
            let exp_check = String(this.state.instruments[i].experience_level);
            if(!exp_check.match(reg)) {
                alert("You must enter an experience level for every instrument!");
                return false;
            }
        }
        return true;
    }

    //final validation and pre-format data for PATCH request to the API
    finalValidation = () => {
        //if a number has been input for each instrument
        if(this.checkExp()){

            //for the PATCH request, we drop 'name' key from genres objects
            let genre_data = this.state.genres;
            genre_data.forEach(genre => {
                delete genre.name;
            });

            this.setState({
                show: false,
                buttonText: "Please wait..."
            });

            this.editProfile(this.state, genre_data);
        }
    }

    //commit these changes to the database via the RESTful API
    editProfile = (editState, genres_data) => {

        //for this optional field, if no value was entered, set to 0
        if (editState.band_exp === "") {
            editState.band_exp = 0;
        }

        //for this optional field, if no value was entered, set to null
        if (editState.age === "") {
            editState.age = null;
        }

        //perform PATCH request to the API
        fetch("http://127.0.0.1:8000/update_user/", {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: localStorage.getItem('id'),
                profile: {
                    age: editState.age,
                    bio: editState.bio,
                    facebook_url: editState.facebook_url,
                    instagram_url: editState.instagram_url,
                    twitter_url: editState.twitter_url,
                    music_url: editState.music_url,
                    distance_limit: editState.distance_limit,
                    band_exp: editState.band_exp,
                    town: editState.town
                },
                instruments: editState.instruments,
                genres: genres_data
            })
        }).then(response => {
            if (response.status === 400) {
                alert(response.status + " " + response.statusText + "\n" +
                    "Please make sure your details such as username and email are correct along with your location allowed!");
            } else if (!response.ok) {
                return false;
            } else if (response.status === 201) {
                return response.json()
            }
        }).then(data => {
            //if the changes made were successfully made and the rec_variable_change is true
            //then we call the method to set recommendations again
            if(this.state.rec_variable_change === true){
                this.setState({generating: true});
                this.setRecommendations(localStorage.getItem('id'));
            } else {
                this.props.history.push('/home');
            }
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    }

    //function that once the user profile is created, generate their recommendations
    setRecommendations = (id) => {
        fetch("http://127.0.0.1:8000/set_recommendations/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: id,
            })
        }).then(response => {
            if(response.status === 400){
                alert(response.status + " " + response.statusText + "\n" +
                    "There was an issue setting your recommendations!");
            } else if(!response.ok){
                return false;
            } else if(response.status === 201) {
                this.props.history.push('/home');
            }
        }).catch((error) => {
            console.log(error);
            throw error;
        })
    }

    render(){

        const {stopEditing} = this.props;

        return(
            <div style={{textAlign:"center"}}>
                <h2>Edit Profile</h2>
                {//if this value is true, show a spinner animation, this is used as a loading
                //screen for when we're generating recommendations
                this.state.generating === true ?
                <div style={{textAlign:"center", padding: "10%"}}>
                    <Spinner animation="border" style=
                        {{width: "100px", height: "100px", marginTop: "12vh", color: "#009fff"}} size="sm"
                    />
                    <h3 style={{textAlign: "center", margin: "3vh"}}>Generating<br/>Recommendations</h3>
                </div>
                    :
                <div>
                    <div className="appForm">
                        <button className="backBtn" onClick={() => stopEditing()}>Back</button>
                        <input
                            type="text"
                            placeholder="Music URL"
                            defaultValue={this.state.music_url}
                            onChange={this.handleChange('music_url')}
                        />
                        <input
                            type="text"
                            placeholder="Facebook URL"
                            defaultValue={this.state.facebook_url}
                            onChange={this.handleChange('facebook_url')}
                        />
                        <input
                            type="text"
                            placeholder="Twitter URL"
                            defaultValue={this.state.twitter_url}
                            onChange={this.handleChange('twitter_url')}
                        />
                        <input
                            type="text"
                            placeholder="Instagram URL"
                            defaultValue={this.state.instagram_url}
                            onChange={this.handleChange('instagram_url')}
                        />
                        <input type="text"
                               placeholder="Age"
                               onChange={this.handleChange('age')}
                               onKeyUp={this.handleKeyUp}
                               defaultValue={this.state.age}
                        />
                        <input type="text"
                               placeholder="Town"
                               onChange={this.handleChange('town')}
                               defaultValue={this.state.town}
                        />
                        <textarea
                            onChange={this.handleChange('bio')}
                            defaultValue={this.state.bio}
                            placeholder="Bio"
                            rows="8"
                        /><br/>
                        <label htmlFor="distance">Distance Limit (km)</label><br/>
                        <input type="text"
                               id="rangeValue"
                               disabled={true}
                               placeholder={this.state.distance_limit + " kilometres"}
                               className="limitValueBox"
                        />
                        <input type="range"
                               id="distance"
                               min="1"
                               max="100"
                               defaultValue={this.state.distance_limit}
                               step="1"
                               onChange={this.handleChange('distance_limit')}
                        />
                    </div>
                    <div className="editMusic">
                        <InstrumentsForm
                            prevIns={this.state.instruments}
                            onInstrumentChange={this.onInstrumentChange}
                        />
                        <GenresForm
                            prevGen={this.state.genres}
                            onGenreChange={this.onGenreChange}
                        />
                        <br/>
                        <h5>Band Experience</h5>
                        <input type="text"
                               style={{width: "40%", textAlign: "center"}}
                               name={"band_exp"}
                               placeholder="Band Experience (years)"
                               defaultValue={this.state.band_exp}
                               onKeyUp={this.handleKeyUp}
                               onChange={this.handleChange('band_exp')}
                               maxLength="2"
                        />
                    </div>
                    <hr/>
                    <button className="formBtn" onClick={() => this.handleModal(true)}>{this.state.buttonText}</button>
                    <button className="backBtn" onClick={() => stopEditing()}>Back</button>
                    <Modal show={this.state.show} onHide={() => this.handleModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Instrument Experience</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{textAlign:"center"}}>
                            <p>Please input your level of experience (in years) for:</p>
                            {this.state.instruments.map(instrument => {
                                return(
                                    <div key={`${instrument.name}-div`} style={{marginBottom:"4%"}}>
                                        <h6 key={`${instrument.name}-head`} className="expHeading">{instrument.name}</h6>
                                        <input
                                            key={`${instrument.name}-key`}
                                            name={`${instrument.name}-exp`}
                                            id={`${instrument.instrument}`}
                                            defaultValue={`${instrument.experience_level}`}
                                            style={{textAlign:"center"}}
                                            onKeyUp={this.handleKeyUp}
                                            onChange={this.setExp}
                                            type="text"
                                            placeholder="Experience"
                                            maxLength="2" />
                                    </div>
                                )
                            })}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.handleModal(false)}>Close</Button>
                            <Button variant="primary" onClick={() => this.finalValidation()}>Submit</Button>
                        </Modal.Footer>
                    </Modal>
                </div>}
            </div>
        )
    }
}

export default withRouter(EditProfile);