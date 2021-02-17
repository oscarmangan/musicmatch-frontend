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
                                <input
                                    value={1}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Accordian"
                                />Accordian
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={2}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Acoustic Guitar"
                                />Acoustic Guitar
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={3}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Banjo"
                                />Banjo
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={4}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Bass Guitar"
                                />Bass Guitar
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={5}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Cello"
                                />Cello
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={6}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Clarinet"
                                />Clarinet
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={7}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Double Bass"
                                />Double Bass
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={8}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Drums"
                                />Drums
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={9}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Electric Guitar"
                                />Electric Guitar
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={10}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Flute"
                                />Flute
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={11}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Harp"
                                />Harp
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={12}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Mandelin"
                                />Mandelin
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={13}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Piano"
                                />Piano
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={14}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Saxophone"
                                />Saxophone
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={15}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Trombone"
                                />Trombone
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={16}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Trumpet"
                                />Trumpet
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={17}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Tuba"
                                />Tuba
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={18}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Viola"
                                />Viola
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={19}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Violin"
                                />Violin
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={20}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Vocalist"
                                />Vocalist
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input
                                    value={21}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Xylophone"
                                />Xylophone
                            </label>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default InstrumentsForm