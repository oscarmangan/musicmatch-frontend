import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import './index.css';
import React, {Fragment, Component} from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MenuBar from "./components/menuBar";
import LoginForm from "./components/loginForm";
import Signup from "./components/signup";
import Homepage from "./components/homepage";
import Discover from "./components/discover";
import Profile from "./components/profile";
import Search from "./components/search";
import SignupComplete from "./components/signupComplete";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthorised: localStorage.getItem('token') ? true : false,
            username: "",
            id: localStorage.getItem('id'),
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
            if (response.status === 200) {
                return response.json();
            } else if(response.status === 400) {
                throw response;
            } else if(!response.ok){
                return false;
            }
        }).then(json => {
            this.setState({
                username: username,
                isAuthorised: true
            }, () => {
                localStorage.setItem('id', json.id);
                localStorage.setItem('token', json.token);
            });
        }).catch((error) => {
            console.log(error);
            throw error;
        })
    };

    /*
    Logout functionality, the token is cleared from local storage. The state is reset to
    being unauthorised and the application is closed off from the user
     */
    logout = () => {
        localStorage.clear();
        this.setState({
            isAuthorised: false
        })
    }


    /*
    Render() where components are displayed along with routing SPA functionality
     */
    render() {
        return (
            <BrowserRouter>
                {!this.state.isAuthorised ? <Redirect to='/login'/> : <Redirect to='/home'/>}
                    <Fragment>
                        <MenuBar auth={this.state.isAuthorised} logout={this.logout}/>
                    </Fragment>
                    <div className="pageContent">
                        <Switch>
                            <Route path='/home'>
                                <Homepage
                                    isAuth={this.state.isAuthorised}
                                    user_id={localStorage.getItem('id')}
                                />
                            </Route>
                            <Route path='/discover'>
                                <Discover
                                    user_id={localStorage.getItem('id')}
                                />
                            </Route>
                            <Route path='/profile'>
                                <Profile
                                    user_id={localStorage.getItem('id')}
                                />
                            </Route>
                            <Route path='/search'>
                                <Search />
                            </Route>
                            <Route path='/login'>
                                <LoginForm
                                    onClick={this.login}
                                    isAuth={this.state.isAuthorised}
                                />
                            </Route>
                            <Route path='/signup'>
                                <Signup
                                    isAuth={this.state.isAuthorised}
                                />
                            </Route>
                            <Route path='/signup/complete'>
                                <SignupComplete />
                            </Route>
                        </Switch>
                    </div>
            </BrowserRouter>
        );
    }
}

export default App;
