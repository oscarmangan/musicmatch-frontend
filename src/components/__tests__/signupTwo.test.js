/*
    Tests for signupTwo component
 */

import {render} from "@testing-library/react";
import SignupTwo from "../signupTwo";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

//test that the component renders correctly
test('signupTwoDoesRender', () => {
    const handleChange = jest.fn();
    const handleKeyUp = jest.fn();
    const getLocation = jest.fn();

    render(
        <Router>
            <SignupTwo
                handleChange={handleChange}
                handleKeyUp={handleKeyUp}
                getLocation={getLocation}
            />
        </Router>
    );
});
