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
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Accordian
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Acoustic Guitar
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Banjo
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Bass Guitar
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Cello
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Clarinet
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Double Bass
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Drums
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Electric Guitar
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Flute
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Harp
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Mandelin
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Piano
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Saxophone
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Trombone
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Trumpet
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Tuba
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Viola
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Violin
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Vocalist
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" onChange={onInstrumentChange} autoComplete="off"/>Xylophone
                            </label>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default InstrumentsForm