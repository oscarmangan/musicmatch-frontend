/*
    Tests for signupOne component
 */

//test that the component renders correctly
import {fireEvent, render} from "@testing-library/react";
import SignupOne from "../signupOne";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

//test that the component renders correctly
test('signupOneDoesRender', () => {
    const handleChange = jest.fn();
    const credentials = [];

    render(
        <Router>
            <SignupOne
                handleChange={handleChange}
                credentials={credentials}
            />
        </Router>
    );
});

//test that ensures the form handles changes to the form correctly
test('signupOneCredentialsChange', () => {

    const handleChange = jest.fn();
    const credentials = [];

    const signupOneComp = render(<Router><SignupOne handleChange={handleChange} credentials={credentials}/></Router>);

    const emailInput = signupOneComp.getByPlaceholderText('Email');
    const unameInput = signupOneComp.getByPlaceholderText('Username');
    const pwordInput = signupOneComp.getByPlaceholderText('Password');
    const cpwrdInput = signupOneComp.getByPlaceholderText('Confirm Password');

    fireEvent.change(emailInput, {'target': {'value': 'testuser@test.com'}});
    fireEvent.change(unameInput, {'target': {'value': 'testuser'}});
    fireEvent.change(pwordInput, {'target': {'value': 'password1'}});
    fireEvent.change(cpwrdInput, {'target': {'value': 'password1'}});

    expect(emailInput.value).toBe('testuser@test.com');
    expect(unameInput.value).toBe('testuser');
    expect(pwordInput.value).toBe('password1');
    expect(cpwrdInput.value).toBe('password1');
});