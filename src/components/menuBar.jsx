import React, { Component, Fragment } from 'react';
import { NavLink } from "react-router-dom";

class MenuBar extends Component {
    state = {

    }

    render() {
        if(this.props.auth){
            return (
                <Fragment>
                    <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#009fff"}}>
                        <NavLink className="navbar-brand" to="/home"><b>musicmatch</b></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/discover">Discover</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/my_profile">Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/search">Search</NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink to="/login" onClick={this.props.logout} className="nav-link">Logout</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#009fff"}}>
                        <NavLink className="navbar-brand" to="/login"><b>musicmatch</b></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink to="/signup" className="nav-link">Signup</NavLink>
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
}

export default MenuBar