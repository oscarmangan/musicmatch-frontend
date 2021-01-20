import React, { Component, Fragment } from 'react';
import mmIcon from "../static/mm_icon_gradient.png";
import ProfileWidget from "./profileWidget";

class TopNine extends Component {
    state = {

    }

    render() {
        return (
            <div className="topNine">
                <div className="row">
                    <div className="col-sm justify-content-center">
                        <ProfileWidget/>
                    </div>
                    <div className="col-sm justify-content-center">
                        <ProfileWidget/>
                    </div>
                    <div className="col-sm justify-content-center">
                        <ProfileWidget/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <ProfileWidget/>
                    </div>
                    <div className="col-sm">
                        <ProfileWidget/>
                    </div>
                    <div className="col-sm">
                        <ProfileWidget/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <ProfileWidget/>
                    </div>
                    <div className="col-sm">
                        <ProfileWidget/>
                    </div>
                    <div className="col-sm">
                        <ProfileWidget/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopNine