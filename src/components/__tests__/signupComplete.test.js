/*
    Tests for SignupComplete component
 */

import {render} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";
import SignupComplete from "../signupComplete";

//test that the component renders correctly
test('signupCompleteDoesRender', () => {

    render(
        <Router>
            <SignupComplete/>
        </Router>
    );
});
