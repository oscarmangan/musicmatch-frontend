import React, { Component, Fragment } from 'react';

class InstrumentsForm extends Component {
    state = {

    }

    render() {
        const {onInstrumentChange} = this.props;

        return (
            <Fragment>
                <h4>Instruments</h4>
                <small id="instrumentsHelpBlock" className="form-text text-muted">
                    Please select at least one or more instruments/talents you play
                </small>
                <div className="instrumentsDiv">
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Accordian" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Accordian
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Acoustic Guitar" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Acoustic Guitar
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Banjo" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Banjo
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Bass Guitar" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Bass Guitar
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Cello" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Cello
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Clarinet" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Clarinet
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Double Bass" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Double Bass
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Drums" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Drums
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Electric Guitar" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Electric Guitar
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Flute" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Flute
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Harp" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Harp
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Mandelin" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Mandelin
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Piano" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Piano
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Saxophone" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Saxophone
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Trombone" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Trombone
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Trumpet" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Trumpet
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Tuba" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Tuba
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Viola" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Viola
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Violin" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Violin
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Vocalist" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Vocalist
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Xylophone" type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Xylophone
                            </label>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default InstrumentsForm