import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import mmIcon from "../static/mm_icon_gradient.png";

class LoginForm extends Component {
    state = {
      username: "",
      password: ""
    };

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(prevState => {
            const newState = {...prevState};
            newState[name] = value;
            return newState;
        });
    };

    render() {
        return (
            <Fragment>
                <div className="circleIcon">
                    <img className="appIcon" alt="Musicmatch icon" src={mmIcon}/>
                </div>
                <form onSubmit={e => this.props.onClick(e, this.state.username, this.state.password)}>
                    <div className="appForm">
                        <h2>Login</h2>
                        <input
                            name="username"
                            onChange={this.onChange}
                            type="text" placeholder="Username"
                            required
                        />
                        <input
                            name="password"
                            onChange={this.onChange}
                            type="password" placeholder="Password"
                            required
                        />
                        <button
                            type="submit"
                            className="formBtn">
                            <span>Login</span>
                        </button>
                        <p>Not a member? <NavLink to="/signup/1">Create an account</NavLink></p>
                        <p>Forgot your password?</p>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default LoginForm