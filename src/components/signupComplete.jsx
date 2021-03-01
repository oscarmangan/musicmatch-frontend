import React, { Component, Fragment} from "react";
import okIcon from "../static/ok.png"
import {NavLink} from "react-router-dom";

class SignupComplete extends Component {

    state = {}

    render() {

        return(
            <Fragment>
                <div className="completeDiv">
                    <img className="okIcon" alt="ok icon" src={okIcon}/>
                    <h1>Signup Complete</h1>
                    <p>You can now login by clicking <NavLink to="/login" className="hotlink">here</NavLink></p>
                </div>
            </Fragment>
        )
    }
}

export default SignupComplete;