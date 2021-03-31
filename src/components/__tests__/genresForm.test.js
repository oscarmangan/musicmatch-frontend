/*
    Tests for GenresForm component
 */

import {render, fireEvent} from "@testing-library/react";
import React from "react";
import GenresForm from "../genresForm";

//test that the component renders successfully
test('genresFormDoesRender', () => {
    render(<GenresForm/>);
});

//test that the clicking the various checkboxes works correctly
test('testGenreChange', () => {
    const genreForm =  render(<GenresForm/>);

    //get the inputs
    const altInput = genreForm.getByTestId('alt');
    const bluInput = genreForm.getByTestId('blu');
    const claInput = genreForm.getByTestId('cla');
    const couInput = genreForm.getByTestId('cou');
    const disInput = genreForm.getByTestId('dis');
    const eleInput = genreForm.getByTestId('ele');
    const hipInput = genreForm.getByTestId('hip');
    const indInput = genreForm.getByTestId('ind');
    const jazInput = genreForm.getByTestId('jaz');
    const metInput = genreForm.getByTestId('met');
    const popInput = genreForm.getByTestId('pop');
    const rnbInput = genreForm.getByTestId('r&b');
    const regInput = genreForm.getByTestId('reg');
    const rocInput = genreForm.getByTestId('roc');
    const traInput = genreForm.getByTestId('tra');

    //change their value
    fireEvent.click(altInput);
    fireEvent.click(bluInput);
    fireEvent.click(claInput);
    fireEvent.click(couInput);
    fireEvent.click(disInput);
    fireEvent.click(eleInput);
    fireEvent.click(hipInput);
    fireEvent.click(indInput);
    fireEvent.click(jazInput);
    fireEvent.click(metInput);
    fireEvent.click(popInput);
    fireEvent.click(rnbInput);
    fireEvent.click(regInput);
    fireEvent.click(rocInput);
    fireEvent.click(traInput);

    //test that the value has changed
    expect(altInput.checked).toEqual(true);
    expect(bluInput.checked).toEqual(true);
    expect(claInput.checked).toEqual(true);
    expect(couInput.checked).toEqual(true);
    expect(disInput.checked).toEqual(true);
    expect(eleInput.checked).toEqual(true);
    expect(hipInput.checked).toEqual(true);
    expect(indInput.checked).toEqual(true);
    expect(jazInput.checked).toEqual(true);
    expect(metInput.checked).toEqual(true);
    expect(popInput.checked).toEqual(true);
    expect(rnbInput.checked).toEqual(true);
    expect(regInput.checked).toEqual(true);
    expect(rocInput.checked).toEqual(true);
    expect(traInput.checked).toEqual(true);
});

//test that the clicking then clicking again results in all checkboxes being unchecked
test('testGenreChangeTwice', () => {
    const genreForm =  render(<GenresForm/>);

    //get the inputs
    const altInput = genreForm.getByTestId('alt');
    const bluInput = genreForm.getByTestId('blu');
    const claInput = genreForm.getByTestId('cla');
    const couInput = genreForm.getByTestId('cou');
    const disInput = genreForm.getByTestId('dis');
    const eleInput = genreForm.getByTestId('ele');
    const hipInput = genreForm.getByTestId('hip');
    const indInput = genreForm.getByTestId('ind');
    const jazInput = genreForm.getByTestId('jaz');
    const metInput = genreForm.getByTestId('met');
    const popInput = genreForm.getByTestId('pop');
    const rnbInput = genreForm.getByTestId('r&b');
    const regInput = genreForm.getByTestId('reg');
    const rocInput = genreForm.getByTestId('roc');
    const traInput = genreForm.getByTestId('tra');

    //change their value
    fireEvent.click(altInput);
    fireEvent.click(bluInput);
    fireEvent.click(claInput);
    fireEvent.click(couInput);
    fireEvent.click(disInput);
    fireEvent.click(eleInput);
    fireEvent.click(hipInput);
    fireEvent.click(indInput);
    fireEvent.click(jazInput);
    fireEvent.click(metInput);
    fireEvent.click(popInput);
    fireEvent.click(rnbInput);
    fireEvent.click(regInput);
    fireEvent.click(rocInput);
    fireEvent.click(traInput);

    //change their value again
    fireEvent.click(altInput);
    fireEvent.click(bluInput);
    fireEvent.click(claInput);
    fireEvent.click(couInput);
    fireEvent.click(disInput);
    fireEvent.click(eleInput);
    fireEvent.click(hipInput);
    fireEvent.click(indInput);
    fireEvent.click(jazInput);
    fireEvent.click(metInput);
    fireEvent.click(popInput);
    fireEvent.click(rnbInput);
    fireEvent.click(regInput);
    fireEvent.click(rocInput);
    fireEvent.click(traInput);

    //test that the value has changed back to false
    expect(altInput.checked).toEqual(false);
    expect(bluInput.checked).toEqual(false);
    expect(claInput.checked).toEqual(false);
    expect(couInput.checked).toEqual(false);
    expect(disInput.checked).toEqual(false);
    expect(eleInput.checked).toEqual(false);
    expect(hipInput.checked).toEqual(false);
    expect(indInput.checked).toEqual(false);
    expect(jazInput.checked).toEqual(false);
    expect(metInput.checked).toEqual(false);
    expect(popInput.checked).toEqual(false);
    expect(rnbInput.checked).toEqual(false);
    expect(regInput.checked).toEqual(false);
    expect(rocInput.checked).toEqual(false);
    expect(traInput.checked).toEqual(false);
});