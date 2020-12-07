import React, { Component, Fragment} from "react";
import mmIcon from '../static/mm_icon_gradient.png';
import InstrumentsForm from "./instrumentsForm";
import GenresForm from "./genresForm";

class SignupTwo extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <div className="circleIcon">
                    <img className="appIcon" alt="Musicmatch icon" src={mmIcon}/>
                </div>
                <form>
                    <div className="appForm">
                        <h2>Musical Traits</h2>
                        <InstrumentsForm />
                        <GenresForm />
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default SignupTwo