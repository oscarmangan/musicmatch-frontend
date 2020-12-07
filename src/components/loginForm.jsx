import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import mmIcon from "../static/mm_icon_gradient.png";

class LoginForm extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <div className="circleIcon">
                    <img className="appIcon" alt="Musicmatch icon" src={mmIcon}/>
                </div>
                <form>
                    <div className="appForm">
                        <h2>Login</h2>
                        <input type="text" placeholder="Email"/><br/>
                        <input type="password" placeholder="Password"/>
                        <button className="formBtn"><span>Login</span></button>
                        <p>Not a member? <NavLink to="/signupOne">Create an account</NavLink></p>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default LoginForm