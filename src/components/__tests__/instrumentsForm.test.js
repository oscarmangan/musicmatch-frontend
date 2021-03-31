/*
    Tests for InstrumentsForm component
 */

import {render, fireEvent} from "@testing-library/react";
import React from "react";
import InstrumentsForm from "../instrumentsForm";
import GenresForm from "../genresForm";

//test that the component renders successfully
test('instrumentsFormDoesRender', () => {
    render(<InstrumentsForm/>);
});

//test that the clicking the various checkboxes works correctly
test('testInstrumentChange', () => {
    const instrForm =  render(<InstrumentsForm/>);

    //get the inputs
    const accInput = instrForm.getByTestId('acc');
    const acoInput = instrForm.getByTestId('aco');
    const banInput = instrForm.getByTestId('ban');
    const basInput = instrForm.getByTestId('bas');
    const celInput = instrForm.getByTestId('cel');
    const claInput = instrForm.getByTestId('cla');
    const dblInput = instrForm.getByTestId('dbl');
    const druInput = instrForm.getByTestId('dru');
    const eleInput = instrForm.getByTestId('ele');
    const fluInput = instrForm.getByTestId('flu');
    const harInput = instrForm.getByTestId('har');
    const manInput = instrForm.getByTestId('man');
    const piaInput = instrForm.getByTestId('pia');
    const saxInput = instrForm.getByTestId('sax');
    const troInput = instrForm.getByTestId('tro');
    const truInput = instrForm.getByTestId('tru');
    const tubInput = instrForm.getByTestId('tub');
    const vioInput = instrForm.getByTestId('vio');
    const vilInput = instrForm.getByTestId('vil');
    const vocInput = instrForm.getByTestId('voc');
    const xylInput = instrForm.getByTestId('xyl');

    //change their value
    fireEvent.click(accInput);
    fireEvent.click(acoInput);
    fireEvent.click(banInput);
    fireEvent.click(basInput);
    fireEvent.click(celInput);
    fireEvent.click(claInput);
    fireEvent.click(dblInput);
    fireEvent.click(druInput);
    fireEvent.click(eleInput);
    fireEvent.click(fluInput);
    fireEvent.click(harInput);
    fireEvent.click(manInput);
    fireEvent.click(piaInput);
    fireEvent.click(saxInput);
    fireEvent.click(troInput);
    fireEvent.click(truInput);
    fireEvent.click(tubInput);
    fireEvent.click(vioInput);
    fireEvent.click(vilInput);
    fireEvent.click(vocInput);
    fireEvent.click(xylInput);


    //test that the value has changed
    expect(accInput.checked).toEqual(true);
    expect(acoInput.checked).toEqual(true);
    expect(banInput.checked).toEqual(true);
    expect(basInput.checked).toEqual(true);
    expect(celInput.checked).toEqual(true);
    expect(claInput.checked).toEqual(true);
    expect(dblInput.checked).toEqual(true);
    expect(druInput.checked).toEqual(true);
    expect(eleInput.checked).toEqual(true);
    expect(fluInput.checked).toEqual(true);
    expect(harInput.checked).toEqual(true);
    expect(manInput.checked).toEqual(true);
    expect(piaInput.checked).toEqual(true);
    expect(saxInput.checked).toEqual(true);
    expect(troInput.checked).toEqual(true);
    expect(truInput.checked).toEqual(true);
    expect(tubInput.checked).toEqual(true);
    expect(vioInput.checked).toEqual(true);
    expect(vilInput.checked).toEqual(true);
    expect(vocInput.checked).toEqual(true);
    expect(xylInput.checked).toEqual(true);
});

//test that the clicking the various checkboxes twice leaves them unchecked
test('testInstrumentChangeTwice', () => {
    const instrForm =  render(<InstrumentsForm/>);

    //get the inputs
    const accInput = instrForm.getByTestId('acc');
    const acoInput = instrForm.getByTestId('aco');
    const banInput = instrForm.getByTestId('ban');
    const basInput = instrForm.getByTestId('bas');
    const celInput = instrForm.getByTestId('cel');
    const claInput = instrForm.getByTestId('cla');
    const dblInput = instrForm.getByTestId('dbl');
    const druInput = instrForm.getByTestId('dru');
    const eleInput = instrForm.getByTestId('ele');
    const fluInput = instrForm.getByTestId('flu');
    const harInput = instrForm.getByTestId('har');
    const manInput = instrForm.getByTestId('man');
    const piaInput = instrForm.getByTestId('pia');
    const saxInput = instrForm.getByTestId('sax');
    const troInput = instrForm.getByTestId('tro');
    const truInput = instrForm.getByTestId('tru');
    const tubInput = instrForm.getByTestId('tub');
    const vioInput = instrForm.getByTestId('vio');
    const vilInput = instrForm.getByTestId('vil');
    const vocInput = instrForm.getByTestId('voc');
    const xylInput = instrForm.getByTestId('xyl');

    //change their value
    fireEvent.click(accInput);
    fireEvent.click(acoInput);
    fireEvent.click(banInput);
    fireEvent.click(basInput);
    fireEvent.click(celInput);
    fireEvent.click(claInput);
    fireEvent.click(dblInput);
    fireEvent.click(druInput);
    fireEvent.click(eleInput);
    fireEvent.click(fluInput);
    fireEvent.click(harInput);
    fireEvent.click(manInput);
    fireEvent.click(piaInput);
    fireEvent.click(saxInput);
    fireEvent.click(troInput);
    fireEvent.click(truInput);
    fireEvent.click(tubInput);
    fireEvent.click(vioInput);
    fireEvent.click(vilInput);
    fireEvent.click(vocInput);
    fireEvent.click(xylInput);

    //change their value again
    fireEvent.click(accInput);
    fireEvent.click(acoInput);
    fireEvent.click(banInput);
    fireEvent.click(basInput);
    fireEvent.click(celInput);
    fireEvent.click(claInput);
    fireEvent.click(dblInput);
    fireEvent.click(druInput);
    fireEvent.click(eleInput);
    fireEvent.click(fluInput);
    fireEvent.click(harInput);
    fireEvent.click(manInput);
    fireEvent.click(piaInput);
    fireEvent.click(saxInput);
    fireEvent.click(troInput);
    fireEvent.click(truInput);
    fireEvent.click(tubInput);
    fireEvent.click(vioInput);
    fireEvent.click(vilInput);
    fireEvent.click(vocInput);
    fireEvent.click(xylInput);

    //test that the value has changed to false
    expect(accInput.checked).toEqual(false);
    expect(acoInput.checked).toEqual(false);
    expect(banInput.checked).toEqual(false);
    expect(basInput.checked).toEqual(false);
    expect(celInput.checked).toEqual(false);
    expect(claInput.checked).toEqual(false);
    expect(dblInput.checked).toEqual(false);
    expect(druInput.checked).toEqual(false);
    expect(eleInput.checked).toEqual(false);
    expect(fluInput.checked).toEqual(false);
    expect(harInput.checked).toEqual(false);
    expect(manInput.checked).toEqual(false);
    expect(piaInput.checked).toEqual(false);
    expect(saxInput.checked).toEqual(false);
    expect(troInput.checked).toEqual(false);
    expect(truInput.checked).toEqual(false);
    expect(tubInput.checked).toEqual(false);
    expect(vioInput.checked).toEqual(false);
    expect(vilInput.checked).toEqual(false);
    expect(vocInput.checked).toEqual(false);
    expect(xylInput.checked).toEqual(false);
});