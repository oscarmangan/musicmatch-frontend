import React, { Component, Fragment } from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

class Discover extends Component {
    state = {
        recommendations: [],
        id: this.props.user_id
    }

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
                <div style={{padding: "15px"}}>
                    {this.state.recommendations.map((group, idx) => {
                        console.log(group);
                        let row_data = [];
                        group.map(rec => {
                            return row_data.push(
                                <Col style={{maxWidth: "33.333%", minWidth: "150px", padding: "0.5vw"}}>
                                    <Card style={{textAlign:"center", maxWidth: "100%"}}>
                                        <Card.Title style={{paddingTop: "0.5vh"}}>{rec.recommendation.username.length > 15 ?
                                            rec.recommendation.username.slice(0,14) + "..." :
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
                        return(<Row style={{marginBottom: "2vh"}}>{row_data}</Row>)
                    })}
                </div>
            </Fragment>
        )
    }
}

export default Discover;