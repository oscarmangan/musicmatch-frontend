import React, { Component, Fragment } from 'react';
import mmIcon from "../static/mm_icon_gradient.png";

class TopNine extends Component {
    state = {

    }

    render() {
        return (
            <div className="topNine">
                <div className="row">
                    <div className="col-sm justify-content-center">
                        <div className="profileWidget">
                            <h4>Name 1</h4>
                            <div className="widgetAvatar">
                                <img alt="avatar" src={mmIcon}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm justify-content-center">
                        <div className="profileWidget">
                            <h4>Name 2</h4>
                            <div className="widgetAvatar">
                                <img alt="avatar" src={mmIcon}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm justify-content-center">
                        <div className="profileWidget">
                            <h4>Name 3</h4>
                            <div className="widgetAvatar">
                                <img alt="avatar" src={mmIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="profileWidget">
                            <h4>Name 4</h4>
                            <div className="widgetAvatar">
                                <img alt="avatar" src={mmIcon}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="profileWidget">
                            <h4>Name 5</h4>
                            <div className="widgetAvatar">
                                <img alt="avatar" src={mmIcon}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="profileWidget">
                            <h4>Name 6</h4>
                            <div className="widgetAvatar">
                                <img alt="avatar" src={mmIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="profileWidget">
                            <h4>Name 7</h4>
                            <div className="widgetAvatar">
                                <img alt="avatar" src={mmIcon}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="profileWidget">
                            <h4>Name 8</h4>
                            <div className="widgetAvatar">
                                <img alt="avatar" src={mmIcon}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="profileWidget">
                            <h4>Name 9</h4>
                            <div className="widgetAvatar">
                                <img alt="avatar" src={mmIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopNine