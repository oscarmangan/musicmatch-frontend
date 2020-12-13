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
            isAuthorised: true,
            username: "oscarmangan",
            email: "oscarmangan.ire@gmail.com"
        }
    }

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
                                <LoginForm />
                            </Route>
                            <Route path='/signupOne'>
                                <SignupOne />
                            </Route>
                            <Route path='/signupTwo'>
                                <SignupTwo />
                            </Route>
                        </Switch>
                    </div>
            </BrowserRouter>
        );
    }
}

export default App;
