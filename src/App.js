import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import './index.css';
import React, {Fragment, Component} from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MenuBar from "./components/menuBar";
import LoginForm from "./components/loginForm";
import SignupOne from "./components/signupOne";
import SignupTwo from "./components/signupTwo";
import Homepage from "./components/homepage";
import Discover from "./components/discover";
import Profile from "./components/profile";
import Search from "./components/search";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthorised: localStorage.getItem('token') ? true : false,
            username: "",
            email: "",
            HOST: 'http://127.0.0.1:8000/'
        }
    }

    /*
    Function to provide login functionality. Takes in username and password, and performs a
    request to the RESTful API. Response will hold the username, email and authorisation token
     */
    login = (e, username, password) => {
        e.preventDefault()
        //error checking that inputs are valid
        if(username === '' || password === ''){
            alert('Username/Password cannot be empty!');
            return;
        }

        fetch(this.state.HOST + 'auth/', {
            async: true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => {
            if(!response.ok){
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        }).then(json => {
            localStorage.setItem('token', json.token);
            this.setState({
                isAuthorised: true
            });
        }).catch((error) => {
            alert(error);
            throw error;
        })
    };

    /*
    Logout functionality, the token is cleared from local storage. The state is reset to
    being unauthorised and the application is closed off from the user
     */
    logout = (e) => {

    }

    /*
    Render() where components are displayed along with routing SPA functionality
     */
    render() {
        return (
            <BrowserRouter>
                {!this.state.isAuthorised ? <Redirect to='/login'/> : <Redirect to='/home'/>}
                    <Fragment>
                        <MenuBar auth={this.state.isAuthorised}/>
                    </Fragment>
                    <div className="pageContent">
                        <Switch>
                            <Route path='/home'>
                                <Homepage />
                            </Route>
                            <Route path='/discover'>
                                <Discover />
                            </Route>
                            <Route path='/profile'>
                                <Profile
                                    uname={this.state.username}
                                    email={this.state.email}
                                />
                            </Route>
                            <Route path='/search'>
                                <Search />
                            </Route>
                            <Route path='/login'>
                                <LoginForm
                                    onClick={this.login}
                                />
                            </Route>
                            <Route path='/signup/1'>
                                <SignupOne />
                            </Route>
                            <Route path='/signup/2'>
                                <SignupTwo />
                            </Route>
                        </Switch>
                    </div>
            </BrowserRouter>
        );
    }
}

export default App;
