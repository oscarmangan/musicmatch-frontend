import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import './index.css';
import React, {Fragment, Component} from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import MenuBar from "./components/menuBar";
import LoginForm from "./components/loginForm";
import SignupOne from "./components/signupOne";
import SignupTwo from "./components/signupTwo";

class App extends Component {
    state = {}

    render() {
        return (
            <HashRouter>
                <Fragment>
                    <MenuBar />
                </Fragment>
                <Fragment>
                    <Switch>
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
                </Fragment>
            </HashRouter>
        );
    }
}

export default App;
