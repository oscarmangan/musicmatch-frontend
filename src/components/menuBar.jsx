import React, {Component, Fragment} from 'react';
import { NavLink } from "react-router-dom";

class MenuBar extends Component {
    state = {

    }

    render() {
        return (
            <Fragment className="menu">
                <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#009fff"}}>
                    <a className="navbar-brand" href="#"><b>musicmatch</b></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Discover</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Search</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/signupOne" className="nav-link">Signup</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default MenuBar