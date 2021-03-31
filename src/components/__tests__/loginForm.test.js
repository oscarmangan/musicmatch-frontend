/*
    Tests for loginForm component
 */

import { render, fireEvent } from '@testing-library/react'
import React from "react";
import LoginForm from "../loginForm";
import { BrowserRouter as Router } from 'react-router-dom';

//test that the component renders correctly
test('loginComponentDoesRender', () => {
    render(
        <Router>
            <LoginForm/>
        </Router>
        );
});

//test that ensures the form handles changes to the form correctly
test('loginFormCredentialsChange', () => {
    const formComp =  render(<Router><LoginForm/></Router>);
    const unameInput = formComp.getByPlaceholderText('Username');
    const pwordInput = formComp.getByPlaceholderText('Password');

    fireEvent.change(unameInput, {'target': {'value': 'testuser'}});
    fireEvent.change(pwordInput, {'target': {'value': 'password1'}});
    expect(unameInput.value).toBe('testuser');
    expect(pwordInput.value).toBe('password1');
});

//function to test that the login method is called when inputs are correct format
test('loginSubmitPass', () => {
    const onClick = jest.fn(e => e.preventDefault());

    const formComp =  render(<Router><LoginForm onClick={onClick}/></Router>);
    const unameInput = formComp.getByPlaceholderText('Username');
    const pwordInput = formComp.getByPlaceholderText('Password');
    const loginBtn = formComp.getByTestId('submit-button');

    fireEvent.change(unameInput, {'target': {'value': 'testuser'}});
    fireEvent.change(pwordInput, {'target': {'value': 'password1'}});
    fireEvent.click(loginBtn);

    expect(onClick).toHaveBeenCalled();
});