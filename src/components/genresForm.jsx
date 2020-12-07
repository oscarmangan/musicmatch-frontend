import React, { Component, Fragment } from 'react';

class GenresForm extends Component {
    state = {

    }

    render() {
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
                                <input type="checkbox" autoComplete="off"/>Alternative
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Blues
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Classical
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Country
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Disco
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Electronic
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Hip-Hop
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Indie
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Jazz
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Metal
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Pop
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>R&B
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Reggae
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Rock
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input type="checkbox" autoComplete="off"/>Traditional
                            </label>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default GenresForm