/*
    Tests for signupThree component
 */

import {fireEvent, render} from "@testing-library/react";
import SignupThree from "../signupThree";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import SignupOne from "../signupOne";

//test that the component renders correctly
test('signupThreeDoesRender', () => {
    const handleChange = jest.fn();
    const handleKeyUp = jest.fn();
    const miscInfo = [];

    render(
        <Router>
            <SignupThree
                handleChange={handleChange}
                handleKeyUp={handleKeyUp}
                miscInfo={miscInfo}
            />
        </Router>
    );
});

//test that ensures all input fields can be correctly changed
test('signupThreeCredentialsChange', () => {

    const handleChange = jest.fn();
    const handleKeyUp = jest.fn();
    const miscInfo = [];

    const signupThreeComp = render(<Router>
        <SignupThree handleChange={handleChange} handleKeyUp={handleKeyUp} miscInfo={miscInfo}/>
    </Router>);

    const musicInput = signupThreeComp.getByPlaceholderText('Music URL');
    const fbInput = signupThreeComp.getByPlaceholderText('Facebook URL');
    const instaInput = signupThreeComp.getByPlaceholderText('Instagram URL');
    const twInput = signupThreeComp.getByPlaceholderText('Twitter URL');
    const ageInput = signupThreeComp.getByPlaceholderText('Age');
    const townInput = signupThreeComp.getByPlaceholderText('Town');
    const bioInput = signupThreeComp.getByPlaceholderText('Bio');
    const locInput = signupThreeComp.getByTestId('loc_range');

    fireEvent.change(musicInput, {'target': {'value': 'https://soundcloud.com/test'}});
    fireEvent.change(fbInput, {'target': {'value': 'https://facebook.com/test'}});
    fireEvent.change(instaInput, {'target': {'value': 'https://instagram.com/test'}});
    fireEvent.change(twInput, {'target': {'value': 'https://twitter.com/test'}});
    fireEvent.change(ageInput, {'target': {'value': '33'}});
    fireEvent.change(townInput, {'target': {'value': 'Dublin'}});
    fireEvent.change(bioInput, {'target': {'value': 'Hey Tester'}});
    fireEvent.change(locInput, {'target': {'value': '99'}});

    //test that the changes made have been correct
    expect(musicInput.value).toBe('https://soundcloud.com/test');
    expect(fbInput.value).toBe('https://facebook.com/test');
    expect(instaInput.value).toBe('https://instagram.com/test');
    expect(twInput.value).toBe('https://twitter.com/test');
    expect(ageInput.value).toBe('33');
    expect(townInput.value).toBe('Dublin');
    expect(locInput.value).toBe('99');
});