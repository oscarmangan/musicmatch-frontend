import React, { Component, Fragment} from "react";
import { NavLink } from "react-router-dom";
import mmIcon from "../static/mm_icon_gradient.png";
import {Redirect} from "react-router";

class SignupOne extends Component {
    state = {}

    nextForm = () => {
        const {checkExists} = this.props;
        checkExists();
    }

    render() {
        const {credentials, handleChange} = this.props;

        return (
            <Fragment>
                {this.props.isAuth ? <Redirect to='/home'/> : <Redirect to='/signup'/>}
                <div className="circleIcon">
                    <img className="appIcon" alt="Musicmatch icon" src={mmIcon}/>
                </div>
                    <div className="appForm">
                        <h2>Sign up</h2>
                        <input type="email"
                               placeholder="Email"
                               onChange={handleChange('email')}
                               defaultValue={credentials.email} required
                        />
                        <input type="text"
                               placeholder="Username"
                               onChange={handleChange('username')}
                               defaultValue={credentials.username} required
                        />
                        <input type="password"
                               placeholder="Password"
                               onChange={handleChange('password')} required
                        />
                        <input type="password"
                               placeholder="Confirm Password"
                               onChange={handleChange('confPassword')} required
                        />
                        <button onClick={() => this.nextForm()} className="formBtn"><span>Next</span></button>
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            Your password should not be too similar to previous information entered.
                        </small>
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            Your username must be at least <u>6</u> characters.
                        </small>
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            Your password must be at least <u>8</u> characters.
                        </small><br />
                        <p>Have an account? <NavLink to="/login" className="hotlink">Login</NavLink></p>
                    </div>
            </Fragment>
        )
    }
}

export default SignupOne
