import React, { Component, Fragment} from "react";
import mmIcon from '../static/mm_icon_gradient.png';
import InstrumentsForm from "./instrumentsForm";
import GenresForm from "./genresForm";
import {Button, Modal} from "react-bootstrap";

class SignupTwo extends Component {
    state = {
        genreCount: 0,
        instrCount: 0,
        show: false,
        instruments: [],
        genres: [],
    }

    //upon component mounting, get the users location and store it
    componentDidMount() {
        const {getLocation} = this.props;
        getLocation();
    }

    //proceed to the next stage in the registration process
    nextForm = () => {
        const {nextStage, addProfileExp} = this.props;
        //ensure user has entered XP levels
        if(this.checkExp()){
            addProfileExp(this.state.instruments, this.state.genres);
            nextStage();
        }
    }

    //go back to the last stage in the registration process
    backForm = e => {
        e.preventDefault();
        this.props.prevStage();
    }

    //if the user has checked at least 1 instrument and 1 genre
    //display the modal, otherwise keep hidden until validation met
    handleModal = (display) => {
        if(this.checkboxValidation()){
            this.setState({
                show: display
            });
        } else {
            return false;
        }
    }

    //function to increment or decrement the number of boxes checked
    //and add/delete the genre checked/unchecked to the state
    onGenreChange = e => {
        if(e.target.checked){
            this.setState((prevState) => ({
                genreCount: prevState.genreCount + 1,
                genres: [...this.state.genres, e.target.value]
            }));
        } else {
            let gen = [...this.state.genres];
            let index = gen.indexOf(e.target.value);
            //check the index status and splice it from gen
            if(index !== -1){
                gen.splice(index, 1);
                this.setState((prevState) => ({
                    genreCount: prevState.genreCount - 1,
                    genres: gen
                }));
            }
        }
    }

    //function to increment or decrement the number of boxes checked
    //and add/delete the instrument checked/unchecked to the state
    onInstrumentChange = e => {
        if(e.target.checked){
            this.setState((prevState) => ({
                instrCount: prevState.instrCount + 1,
                //add the new object to the array
                instruments: [...this.state.instruments, {
                    name: e.target.value,
                    exp: ""
                }]
            }));
        } else {
            let ins = [...this.state.instruments];
            let index = ins.findIndex(i => i.name === e.target.value);
            //check the index status and splice it from ins
            if(index !== -1){
                ins.splice(index, 1);
                this.setState((prevState) => ({
                    instrCount: prevState.instrCount - 1,
                    instruments: ins
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
        let instrArr = [...this.state.instruments]
        let index = instrArr.findIndex(i => i.name === e.target.name.slice(0,-4))
        instrArr[index] = {
            name: e.target.name.slice(0, -4),
            exp: thisExp
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
            if(!this.state.instruments[i].exp.match(reg)) {
                alert("You must enter an experience level for every instrument!");
                return false;
            }
        }
        return true;
    }

    render() {
        const {handleChange, handleKeyUp} = this.props;

        return (
            <Fragment>
                <div className="circleIcon">
                    <img className="appIcon" alt="Musicmatch icon" src={mmIcon}/>
                </div>
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
                                        onKeyUp={handleKeyUp}
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
                        <Button variant="primary" onClick={() => this.nextForm()}>Submit</Button>
                    </Modal.Footer>
                </Modal>
                <div className="appForm">
                    <h2>Musical Traits</h2>
                    <InstrumentsForm
                        onInstrumentChange={this.onInstrumentChange}
                    />
                    <GenresForm
                        onGenreChange={this.onGenreChange}
                    /><br/>
                    <h4>Band Experience</h4>
                    <input type="text"
                           name={"band_exp"}
                           placeholder="Band experience (years)"
                           onKeyUp={handleKeyUp}
                           onChange={handleChange('band_exp')}
                           maxLength="2"
                    />
                    <button onClick={() => this.handleModal(true)} className="formBtn"><span>Next</span></button>
                </div>
            </Fragment>
        )
    }
}

export default SignupTwo;