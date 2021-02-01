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
        instruments: [

        ],
        genres: [

        ]
    }

    nextForm = e => {
        e.preventDefault();
        if(this.checkboxValidation()){
            this.props.nextStage();
        }
    }

    backForm = e => {
        e.preventDefault();
        this.props.prevStage();
    }

    handleModal = display => {
        this.setState({
            show:display
        });
    }

    //function to increment or decrement the number of boxes checked
    onGenreChange = e => {
        if(e.target.checked){
            this.setState((prevState) => ({
                genreCount: prevState.genreCount + 1
            }));
            console.log(this.state.genreCount);
        } else {
            this.setState((prevState) => ({
                genreCount: prevState.genreCount - 1
            }));
            console.log(this.state.genreCount);
        }
    }

    //function to increment or decrement the number of boxes checked
    onInstrumentChange = e => {
        if(e.target.checked){
            this.setState((prevState) => ({
                instrCount: prevState.instrCount + 1
            }));
            this.setState({
                instruments: [...this.state.instruments, e.target.value]
            });
            console.log(this.state.instrCount);
        } else {
            this.setState((prevState) => ({
               instrCount: prevState.instrCount - 1
            }));
            console.log(this.state.instrCount);
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

    getExperience = () => {

    }

    render() {
        const {handleChange, handleKeyUp} = this.props;

        this.componentWillMount = () => {
            window.onpopstate = e => {
                this.backForm(e);
            }
        }

        return (
            <Fragment>
                <div className="circleIcon">
                    <img className="appIcon" alt="Musicmatch icon" src={mmIcon}/>
                </div>
                <Modal show={this.state.show} onHide={() => this.handleModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Instrument Experience</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Please input your level of experience (in years) for:</p>
                        {this.state.instruments.map(instrument => {
                            return(
                                <div>
                                    <h6>{instrument}</h6>
                                    <input type="number"
                                    placeholder="XP"/>
                                </div>
                            )
                        })}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleModal(false)}>Close</Button>
                        <Button variant="primary">Submit</Button>
                    </Modal.Footer>
                </Modal>
                <form>
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
                               placeholder="Band experience (years)"
                               onKeyUp={handleKeyUp}
                               onChange={handleChange('band_exp')}
                               maxLength="2"
                               required
                        />
                        <button onClick={() => {this.handleModal(true)}} className="formBtn"><span>Next</span></button>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default SignupTwo;