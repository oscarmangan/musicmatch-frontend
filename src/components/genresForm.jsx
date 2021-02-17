import React, { Component, Fragment } from 'react';

class GenresForm extends Component {
    state = {

    }

    render() {
        const {onGenreChange} = this.props;

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
                                <input value={15} type="checkbox" onChange={onGenreChange} autoComplete="off"/>Alternative
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value={14} type="checkbox" onChange={onGenreChange} autoComplete="off"/>Blues
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value={13} type="checkbox" onChange={onGenreChange} autoComplete="off"/>Classical
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value={12} type="checkbox" onChange={onGenreChange} autoComplete="off"/>Country
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value={11} type="checkbox" onChange={onGenreChange} autoComplete="off"/>Disco
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value={10} type="checkbox" onChange={onGenreChange} autoComplete="off"/>Electronic
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value={9} type="checkbox" onChange={onGenreChange} autoComplete="off"/>Hip-Hop
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value={8} type="checkbox" onChange={onGenreChange} autoComplete="off"/>Indie
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value={7} type="checkbox" onChange={onGenreChange} autoComplete="off"/>Jazz
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value={6} type="checkbox" onChange={onGenreChange} autoComplete="off"/>Metal
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value={5} type="checkbox" onChange={onGenreChange} autoComplete="off"/>Pop
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value={4} type="checkbox" onChange={onGenreChange} autoComplete="off"/>R&B
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value={3} type="checkbox" onChange={onGenreChange} autoComplete="off"/>Reggae
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value={2} type="checkbox" onChange={onGenreChange} autoComplete="off"/>Rock
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value={1} type="checkbox" onChange={onGenreChange} autoComplete="off"/>Traditional
                            </label>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default GenresForm