import React, { Component } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import {NavLink} from "react-router-dom";

class TopNine extends Component {
    state = {
        recommendations: [],
        id: this.props.user_id
    }

    //fire this method once the component topNine mounts
    componentDidMount() {
        this.getRecommendations(this.state.id);
    }

    //function to retrieve the logged in users top recommendations
    getRecommendations = (id) => {
        let url = 'http://127.0.0.1:8000/get_recommendations/?id=' + id + '&limit=true';

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

    //in this method, the 2D array is taken and for each subarray, a new row of cards are generated
    render() {
        return (
            <div style={{padding: "15px"}}>
                {this.state.recommendations.map((group, idx) => {
                    let row_data = [];
                    group.map(rec => {
                        return row_data.push(
                            <Col key={`${rec.recommendation.username}-col`} style={{maxWidth: "33.333%", minWidth: "150px", padding: "0.5vw"}}>
                                <Card style={{textAlign:"center", maxWidth: "100%"}}>
                                    <Card.Title style={{paddingTop: "0.5vh"}}>{rec.recommendation.username.length > 15 ?
                                        rec.recommendation.username.slice(0,15)+"..." :
                                        rec.recommendation.username
                                    }</Card.Title>
                                    <Card.Img
                                        src={rec.recommendation.images[0]}
                                        style={{minHeight: "200px", objectFit: "cover"}}
                                    />
                                    <Card.Body style={{padding: "2vh 0"}}>
                                        <small className="matchRate">{Math.round((rec.score / 3.5) * 100)}% match</small><br/>
                                        <small className="distanceRate">{Math.round(rec.distance_from_user)}km away</small>
                                        <button className="widgetButton" onClick={()=>this.getRecommendations(30678)}>View Profile</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    });
                    return(<Row key={idx} style={{marginBottom: "2vh"}}>{row_data}</Row>)
                })}
                <NavLink to="/discover/">
                    <button className="toDiscoverBtn">Discover More</button>
                </NavLink>

            </div>
        )
    }
}

export default TopNine