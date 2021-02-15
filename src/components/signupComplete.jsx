import React, { Component, Fragment} from "react";
import okIcon from "../static/ok.png"

class SignupComplete extends Component {

    state = {}

    render() {

        return(
            <Fragment>
                <div className="completeDiv">
                    <img className="okIcon" alt="ok icon" src={okIcon}/>
                    <h1>Signup Complete</h1>
                </div>
            </Fragment>
        )
    }
}

export default SignupComplete;