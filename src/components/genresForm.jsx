import React, { Component, Fragment } from 'react';

class GenresForm extends Component {
    state = {

    }

    render() {
        const {onGenreChange, prevGen} = this.props;

        /*
        For edit profile only, we will hold the IDs of all instruments the user has already
        associated with their profile and pre-check these checkboxes
         */
        let prevGen_ids = [];

        //here we loop through each array objects into an array of IDs
        //for generating if certain checkboxes have already been checked
        for(let i=0; i < prevGen.length; i++){
            prevGen_ids.push(prevGen[i]['genre']);
        }

        return (
            <Fragment>
                <h4>Genres</h4>
                <small id="genresHelpBlock" className="form-text text-muted">
                    Please select at least one or more genres you play
                </small>
                <div className="genresDiv">
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(15) === false ?
                                    <input
                                        value={15}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Alternative"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={15}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Alternative"
                                        defaultChecked={true}
                                    />
                                } Alternative
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(14) === false ?
                                    <input
                                        value={14}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Blues"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={14}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Blues"
                                        defaultChecked={true}
                                    />
                                } Blues
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(13) === false ?
                                    <input
                                        value={13}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Classical"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={13}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Classical"
                                        defaultChecked={true}
                                    />
                                } Classical
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(12) === false ?
                                    <input
                                        value={12}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Country"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={12}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Country"
                                        defaultChecked={true}
                                    />
                                } Country
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(11) === false ?
                                    <input
                                        value={11}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Disco"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={11}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Disco"
                                        defaultChecked={true}
                                    />
                                } Disco
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(10) === false ?
                                    <input
                                        value={10}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Electronic"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={10}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Electronic"
                                        defaultChecked={true}
                                    />
                                } Electronic
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(9) === false ?
                                    <input
                                        value={9}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Hip-Hop"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={9}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Hip-Hop"
                                        defaultChecked={true}
                                    />
                                } Hip-Hop
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(8) === false ?
                                    <input
                                        value={8}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Indie"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={8}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Indie"
                                        defaultChecked={true}
                                    />
                                } Indie
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(7) === false ?
                                    <input
                                        value={7}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Jazz"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={7}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Jazz"
                                        defaultChecked={true}
                                    />
                                } Jazz
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(6) === false ?
                                    <input
                                        value={6}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Metal"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={6}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Metal"
                                        defaultChecked={true}
                                    />
                                } Metal
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(5) === false ?
                                    <input
                                        value={5}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Pop"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={5}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Pop"
                                        defaultChecked={true}
                                    />
                                } Pop
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(4) === false ?
                                    <input
                                        value={4}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="R&B"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={4}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="R&B"
                                        defaultChecked={true}
                                    />
                                } R&B
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(3) === false ?
                                    <input
                                        value={3}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Reggae"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={3}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Reggae"
                                        defaultChecked={true}
                                    />
                                } Reggae
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(2) === false ?
                                    <input
                                        value={2}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Rock"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={2}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Rock"
                                        defaultChecked={true}
                                    />
                                } Rock
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                {prevGen_ids.includes(1) === false ?
                                    <input
                                        value={1}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Traditional"
                                        defaultChecked={false}
                                    /> :
                                    <input
                                        value={1}
                                        type="checkbox"
                                        onChange={onGenreChange}
                                        autoComplete="off"
                                        name="Traditional"
                                        defaultChecked={true}
                                    />
                                } Traditional
                            </label>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default GenresForm