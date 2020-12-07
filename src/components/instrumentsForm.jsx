import React, { Component, Fragment } from 'react';

class InstrumentsForm extends Component {
    state = {

    }

    render() {
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
                                <input type="checkbox" autoComplete="off"/>
                                Accordian<input type="text" maxLength="2" placeholder="XP"/>
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Acoustic Guitar
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Banjo
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Bass Guitar
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Cello
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Clarinet
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Double Bass
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Drums
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Electric Guitar
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Flute
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Harp
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Mandelin
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Piano
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Saxophone
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Trombone
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Trumpet
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Tuba
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Viola
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Violin
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Vocalist
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Xylophone
                            </label>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default InstrumentsForm