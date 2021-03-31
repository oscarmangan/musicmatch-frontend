import React, { Component } from 'react';
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
                {/*
                    For each subarray in the 2D array, create a new row and append each element as a column
                    This results in three columns per row by the structure of the 2D array created
                    when the data is retrieved from the server
                */
                    this.state.recommendations.map((group, idx) => {
                    let row_data = [];
                    group.map(rec => {
                        return row_data.push(
                            <div className="col-sm" key={`${rec.recommendation.username}-col`} style={{marginBottom: "1vh", padding: "0.5vw", minWidth: "180px"}}>
                                <Card style={{textAlign:"center", width: "100%"}}>
                                    <Card.Title style={{paddingTop: "0.5vh"}}>{rec.recommendation.username.length > 14 ?
                                        rec.recommendation.username.slice(0,14)+"..." :
                                        rec.recommendation.username
                                    }</Card.Title>
                                    <Card.Img
                                        src={"http://127.0.0.1:8000" + rec.recommendation.images[0]}
                                        alt={"user image"}
                                        style={{minHeight: "200px", maxHeight: "200px", objectFit: "cover"}}
                                    />
                                    <Card.Body style={{padding: "2vh 0"}}>
                                        <small className="matchRate">{Math.round((rec.score / 3.5) * 100)}% match</small><br/>
                                        <small className="distanceRate">{Math.round(rec.distance_from_user)}km away</small>
                                        <NavLink className="nav-link" to={`/profile/${rec.recommendation.id}`}>
                                            <button className="widgetButton">View Profile</button>
                                        </NavLink>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    });
                    //once the end of the 3 element sub array is reached, return the new row to render
                    return(<div key={idx} style={{marginBottom: "2vh"}} className="row">{row_data}</div>)
                })}
                <NavLink to="/discover/">
                    <button className="toDiscoverBtn">Discover More</button>
                </NavLink>

            </div>
        )
    }
}

export default TopNine