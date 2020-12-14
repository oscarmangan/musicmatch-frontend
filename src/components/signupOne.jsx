import React, { Component, Fragment} from "react";
import { NavLink } from "react-router-dom";
import mmIcon from "../static/mm_icon_gradient.png";

class SignupOne extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <div className="circleIcon">
                    <img className="appIcon" alt="Musicmatch icon" src={mmIcon}/>
                </div>
                <form>
                    <div className="appForm">
                        <h2>Sign up</h2>
                        <input type="text" placeholder="Email" required/>
                        <input type="text" placeholder="Username" required/>
                        <input type="password" placeholder="Password" required/>
                        <input type="password" placeholder="Confirm Password" required/>
                        <NavLink to="/signup/2"><button className="formBtn"><span>Next</span></button></NavLink>
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            Your password cannot be too similar to previous information entered.
                        </small>
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            Your password must consist of letters <u>and</u> numbers.
                        </small>
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            Your password must be at least <u>8</u> characters.
                        </small><br />
                        <p>Have an account? <NavLink to="/login" className="hotlink">Login</NavLink></p>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default SignupOne
