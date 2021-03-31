/*
    Tests for EditProfile component
 */

import {render} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import EditProfile from "../EditProfile";
import React from "react";

//test that the component renders correctly
test('editProfileDoesRender', () => {

    const user_details = {
        username: "test",
        email: "test@test.com",
        town: "testers town",
        age: "100",
        bio: "test bio",
        band_exp: "",
        images: [],
        instruments: [],
        genres: [],
        socials: {
            facebook_url: "",
            twitter_url: "",
            instagram_url: "",
            music_url: ""
        }
    }
    const stopEditing = jest.fn();

    render(
        <Router>
            <EditProfile
                user_details={user_details}
                stopEditing={stopEditing}
            />
        </Router>
    );
});
