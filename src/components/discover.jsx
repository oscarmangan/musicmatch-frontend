import React, { Component, Fragment } from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import {NavLink} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

class Discover extends Component {
    state = {
        recommendations: [],
        id: this.props.user_id
    }

    //get the recommendations for the current logged in user
    componentDidMount() {
        this.getRecommendations(this.state.id);
    }

    //function to retrieve all of the logged in users recommendations
    getRecommendations = (id) => {
        let url = 'http://127.0.0.1:8000/get_recommendations/?id=' + id + '&limit=false';

        //perform the GET request to the URL to retrieve the recommendations
        fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else if(response.status === 400) {
                    throw response;
                } else if(!response.ok){
                    return false;
                }}).then(json => {
            //convert the array of data into groups of 3 for display
            let rec_list = [];
            while(json.length > 0){
                rec_list.push(json.splice(0, 3));
            }
            //add this 2D array to the state
            this.setState({
                recommendations: rec_list
            })
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    }

    render() {
        return(
            <Fragment>
                <h2>Discover</h2>
                {//play a spinner animation while waiting for the recommendations to load
                    this.state.recommendations.length === 0 ?
                        <div style={{textAlign:"center", padding: "30%"}}>
                            <Spinner animation="border" style={{width: "100px", height: "100px"}} size="sm"/>
                        </div>
                     :
                        <div style={{padding: "15px"}}>
                        {/*
                            For each subarray in the 2D array, create a new row and append each element as a column
                            This results in three columns per row by the structure of the 2D array created
                            when the data is retrieved from the server
                        */
                            this.state.recommendations.map((group, idx) => {
                                let row_data = [];
                                group.map(rec => {
                                    return row_data.push(
                                        <Col key={`${rec.recommendation.username}-col`} style={{maxWidth: "33.333%", minWidth: "150px", padding: "0.5vw"}}>
                                            <Card style={{textAlign:"center", maxWidth: "100%"}}>
                                                <Card.Title style={{paddingTop: "0.5vh"}}>{rec.recommendation.username.length > 15 ?
                                                    rec.recommendation.username.slice(0,14) + "..." :
                                                    rec.recommendation.username
                                                }</Card.Title>
                                                <Card.Img
                                                    src={"http://127.0.0.1:8000" + rec.recommendation.images[0]}
                                                    style={{minHeight: "200px", objectFit: "cover"}}
                                                />
                                                <Card.Body style={{padding: "2vh 0"}}>
                                                    <small className="matchRate">{Math.round((rec.score / 3.5) * 100)}% match</small><br/>
                                                    <small className="distanceRate">{Math.round(rec.distance_from_user)}km away</small>
                                                    <NavLink className="nav-link" to={`/profile/${rec.recommendation.id}`}>
                                                        <button className="widgetButton">View Profile</button>
                                                    </NavLink>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                });
                                //once the end of the 3 element sub array is reached, return the new row to render
                                return(<Row key={`${idx}`} style={{marginBottom: "2vh"}}>{row_data}</Row>)
                            })}
                    </div>
                }
            </Fragment>
        )
    }
}

export default Discover;