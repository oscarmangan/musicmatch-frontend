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
                                <input value="Alternative" type="checkbox" onChange={onGenreChange} autoComplete="off"/>Alternative
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Blues" type="checkbox" onChange={onGenreChange} autoComplete="off"/>Blues
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Classical" type="checkbox" onChange={onGenreChange} autoComplete="off"/>Classical
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Country" type="checkbox" onChange={onGenreChange} autoComplete="off"/>Country
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Disco" type="checkbox" onChange={onGenreChange} autoComplete="off"/>Disco
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Electronic" type="checkbox" onChange={onGenreChange} autoComplete="off"/>Electronic
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Hip-Hop" type="checkbox" onChange={onGenreChange} autoComplete="off"/>Hip-Hop
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Indie" type="checkbox" onChange={onGenreChange} autoComplete="off"/>Indie
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Jazz" type="checkbox" onChange={onGenreChange} autoComplete="off"/>Jazz
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Metal" type="checkbox" onChange={onGenreChange} autoComplete="off"/>Metal
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Pop" type="checkbox" onChange={onGenreChange} autoComplete="off"/>Pop
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="R&B" type="checkbox" onChange={onGenreChange} autoComplete="off"/>R&B
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Reggae" type="checkbox" onChange={onGenreChange} autoComplete="off"/>Reggae
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Rock" type="checkbox" onChange={onGenreChange} autoComplete="off"/>Rock
                            </label>
                        </div>
                        <div className="col-sm">
                            <label className="preferenceBtn">
                                <input value="Traditional" type="checkbox" onChange={onGenreChange} autoComplete="off"/>Traditional
                            </label>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default GenresForm