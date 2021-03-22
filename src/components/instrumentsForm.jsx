import React, { Component, Fragment } from 'react';

class InstrumentsForm extends Component {
    state = {

    }

    render() {
        const {onInstrumentChange, prevIns} = this.props;

        /*
        For edit profile only, we will hold the IDs of all instruments the user has already
        associated with their profile and pre-check these checkboxes
         */
        let prevIns_ids = [];

        //here we loop through each array objects into an array of IDs
        //for generating if certain checkboxes have already been checked
        if(prevIns) {
            for (let i = 0; i < prevIns.length; i++) {
                prevIns_ids.push(prevIns[i]['instrument']);
            }
        }

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
                                {prevIns_ids.includes(1) === false ?
                                <input
                                    value={1}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Accordian"
                                    defaultChecked={false}
                                /> :
                                <input
                                    value={1}
                                    type="checkbox"
                                    onChange={onInstrumentChange}
                                    autoComplete="off"
                                    name="Accordian"
                                    defaultChecked={true}
                                />}Accordian
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(2) === false ?
                                    <input
                                        value={2}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Acoustic Guitar"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={2}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Acoustic Guitar"
                                        defaultChecked={true}
                                    />}Acoustic Guitar
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(3) === false ?
                                    <input
                                        value={3}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Banjo"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={3}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Banjo"
                                        defaultChecked={true}
                                    />
                                }Banjo
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(4) === false ?
                                    <input
                                        value={4}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Bass Guitar"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={4}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Bass Guitar"
                                        defaultChecked={true}
                                    />
                                }Bass Guitar
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(5) === false ?
                                    <input
                                        value={5}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Cello"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={5}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Cello"
                                        defaultChecked={true}
                                    />
                                }Cello
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(6) === false ?
                                    <input
                                        value={6}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Clarinet"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={6}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Clarinet"
                                        defaultChecked={true}
                                    />
                                }Clarinet
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(7) === false ?
                                    <input
                                        value={7}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Double Bass"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={7}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Double Bass"
                                        defaultChecked={true}
                                    />
                                }Double Bass
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(8) === false ?
                                    <input
                                        value={8}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Drums"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={8}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Drums"
                                        defaultChecked={true}
                                    />
                                }Drums
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(9) === false ?
                                    <input
                                        value={9}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Electric Guitar"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={9}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Electric Guitar"
                                        defaultChecked={true}
                                    />
                                }Electric Guitar
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(10) === false ?
                                    <input
                                        value={10}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Flute"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={10}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Flute"
                                        defaultChecked={true}
                                    />
                                }Flute
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(11) === false ?
                                    <input
                                        value={11}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Harp"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={11}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Harp"
                                        defaultChecked={true}
                                    />
                                }Harp
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(12) === false ?
                                    <input
                                        value={12}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Mandelin"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={12}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Mandelin"
                                        defaultChecked={true}
                                    />
                                }Mandelin
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(13) === false ?
                                    <input
                                        value={13}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Piano"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={13}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Piano"
                                        defaultChecked={true}
                                    />
                                }Piano
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(14) === false ?
                                    <input
                                        value={14}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Saxophone"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={14}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Saxophone"
                                        defaultChecked={true}
                                    />
                                }Saxophone
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(15) === false ?
                                    <input
                                        value={15}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Trombone"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={15}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Trombone"
                                        defaultChecked={true}
                                    />
                                }Trombone
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(16) === false ?
                                    <input
                                        value={16}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Trumpet"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={16}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Trumpet"
                                        defaultChecked={true}
                                    />
                                }Trumpet
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(17) === false ?
                                    <input
                                        value={17}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Tuba"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={17}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Tuba"
                                        defaultChecked={true}
                                    />
                                }Tuba
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(18) === false ?
                                    <input
                                        value={18}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Viola"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={18}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Viola"
                                        defaultChecked={true}
                                    />
                                }Viola
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(19) === false ?
                                    <input
                                        value={19}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Violin"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={19}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Violin"
                                        defaultChecked={true}
                                    />
                                }Violin
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(20) === false ?
                                    <input
                                        value={20}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Vocalist"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={20}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Vocalist"
                                        defaultChecked={true}
                                    />
                                }Vocalist
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevIns_ids.includes(21) === false ?
                                    <input
                                        value={21}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Xylophone"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={21}
                                        type="checkbox"
                                        onChange={onInstrumentChange}
                                        autoComplete="off"
                                        name="Xylophone"
                                        defaultChecked={true}
                                    />
                                }Xylophone
                            </label>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default InstrumentsForm