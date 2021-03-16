import React, { Component } from 'react';
import background_img from "../static/aura.jpg";
import ProfileWidget from "./profileWidget";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class TopNine extends Component {
    state = {

    }

    render() {
        return (
            <div className="topNine" style={{
                background: `url(${background_img})`,
            }}>
                <Row>
                    <Col style={{paddingLeft: "4vw"}}>
                        <ProfileWidget
                            username={'oscarmangan'}
                            distance={7.05}
                            image={"http://127.0.0.1:8000/media/user_images/33813/avatar.jpg"}
                            score={2.4966}
                        />
                    </Col>
                    <Col style={{paddingLeft: "1vw", paddingRight: "1vw"}}>
                        <ProfileWidget
                            username={'oscarmangan'}
                            distance={7.05}
                            image={"http://127.0.0.1:8000/media/user_images/33813/avatar.jpg"}
                            score={2.4966}
                        />
                    </Col>
                    <Col style={{paddingRight: "4vw"}}>
                        <ProfileWidget
                            username={'rachellai21'}
                            distance={7.05}
                            image={"http://127.0.0.1:8000/media/user_images/33812/PESPC_Le_Mans.jpg"}
                            score={2.4966}
                        />
                    </Col>
                </Row>
                <div className="row">
                    <div className="col-sm justify-content-center">
                        <ProfileWidget
                            username={'hey'}
                            distance={7.05}
                            image={'http://127.0.0.1:8000/media/user_images/33812/PESPC_Le_Mans.jpg'}
                            score={2.4596}
                        />
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
                </div><br/>
            </div>
        )
    }
}

export default TopNine