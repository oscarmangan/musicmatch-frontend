import React, {Component, Fragment} from "react";
import mmIcon from '../static/mm_icon_gradient.png';
import uploadIcon from '../static/upload.png';
import delIcon from '../static/delete.png';

class SignupThree extends Component {
    state = {
        images: [],
        isUploaded: [false, false, false]
    }

    finishSignup = e => {
        e.preventDefault();
        const {finishSignup} = this.props;
        finishSignup(e);
    }

    //function to change the upload icon for each image uploaded as a preview of the
    //image that was uploaded by the user
    handleImageUpload = (e, id) => {

        let index = id;
        if(e.target.files && e.target.files[0]){

            let reader = new FileReader();

            //get the initial state and change the image to the uploaded one
            reader.onloadend = (e) => {

                //change the state index for the image uploaded
                let uploadBooleans = this.state.isUploaded;
                let uploadImages = this.state.images;

                uploadBooleans[index] = true;
                uploadImages[index] = e.target.result;

                this.setState({
                    images: uploadImages,
                    isUploaded: uploadBooleans
                });

            }
            reader.readAsDataURL(e.target.files[0]);
        }

    }

    //function to remove an image uploaded
    removeUpload = (e, id) => {
        let index = id;
        let removeBooleans = this.state.isUploaded;
        let removeImages = this.state.images;

        removeBooleans[index] = false;
        removeImages[index] = null;

        this.setState({
            images: removeImages,
            isUploaded: removeBooleans
        });
    }

    render() {
        const {miscInfo, handleChange, handleKeyUp, finishSignup} = this.props;

        return(
            <Fragment>
                <div className="circleIcon">
                    <img className="appIcon" alt="Musicmatch icon" src={mmIcon}/>
                </div>
                    <div className="appForm">
                        <h2>Profile</h2>
                        <h6>Upload Images (maximum 3)</h6>
                        <div className="imageUploadDiv">
                            {this.state.isUploaded[0] ? (
                                <div className="uploadContainer">
                                    <img
                                        className="deleteIcon"
                                        onClick={(e) => {this.removeUpload(e, 0)}}
                                        alt="Delete Icon"
                                        src={delIcon}
                                    />
                                    <label htmlFor="imageInputOne" className="uploadBtn">
                                        <img className="uploadedImg" alt="Upload icon" src={this.state.images[0]}/>
                                    </label>
                                </div>
                            ) : (
                                <div className="uploadContainer">
                                    <label htmlFor="imageInputOne" className="uploadBtn">
                                        <img className="uploadIcon" alt="Upload icon" src={uploadIcon}/>
                                    </label>
                                </div>
                            )}
                            <input
                                id="imageInputOne"
                                type="file"
                                multiple={false}
                                accept=".jpg,.jpeg,.png"
                                onChange={(e) => {this.handleImageUpload(e, 0)}}
                                style={{display: "none"}}
                            />
                            {this.state.isUploaded[1] ? (
                                <div className="uploadContainer">
                                    <img
                                        className="deleteIcon"
                                        onClick={(e) => {this.removeUpload(e, 1)}}
                                        alt="Delete Icon"
                                        src={delIcon}
                                    />
                                    <label htmlFor="imageInputTwo" className="uploadBtn">
                                        <img className="uploadedImg" alt="Upload icon" src={this.state.images[1]}/>
                                    </label>
                                </div>
                            ) : (
                                <div className="uploadContainer">
                                    <label htmlFor="imageInputTwo" className="uploadBtn">
                                        <img className="uploadIcon" alt="Upload icon" src={uploadIcon}/>
                                    </label>
                                </div>
                            )}
                            <input
                                id="imageInputTwo"
                                type="file"
                                multiple={false}
                                accept=".jpg,.jpeg,.png"
                                onChange={(e) => {this.handleImageUpload(e, 1)}}
                                style={{display: "none"}}
                            />
                            {this.state.isUploaded[2] ? (
                                <div className="uploadContainer">
                                    <img
                                        className="deleteIcon"
                                        onClick={(e) => {this.removeUpload(e, 2)}}
                                        alt="Delete Icon"
                                        src={delIcon}
                                    />
                                    <label htmlFor="imageInputThree" className="uploadBtn">
                                        <img className="uploadedImg" alt="Upload icon" src={this.state.images[2]}/>
                                    </label>
                                </div>
                            ) : (
                                <div className="uploadContainer">
                                    <label htmlFor="imageInputThree" className="uploadBtn">
                                        <img className="uploadIcon" alt="Upload icon" src={uploadIcon}/>
                                    </label>
                                </div>
                            )}
                            <input
                                id="imageInputThree"
                                type="file"
                                multiple={false}
                                accept=".jpg,.jpeg,.png"
                                onChange={(e) => {this.handleImageUpload(e, 2)}}
                                style={{display: "none"}}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Facebook URL"
                            defaultValue={miscInfo.facebook_url}
                            onChange={handleChange('facebook_url')}
                        />
                        <input
                            type="text"
                            placeholder="Twitter URL"
                            defaultValue={miscInfo.twitter_url}
                            onChange={handleChange('twitter_url')}
                        />
                        <input
                            type="text"
                            placeholder="Instagram URL"
                            defaultValue={miscInfo.instagram_url}
                            onChange={handleChange('instagram_url')}
                        />
                        <input type="text"
                           placeholder="Age"
                           onChange={handleChange('age')}
                           onKeyUp={handleKeyUp}
                           defaultValue={miscInfo.age}
                        />
                        <input type="text"
                           placeholder="Town"
                           onChange={handleChange('town')}
                           defaultValue={miscInfo.town}
                        />
                        <textarea
                            onChange={handleChange('bio')}
                            defaultValue={miscInfo.bio}
                            placeholder="Bio"
                            rows="8"
                        />
                        <button onClick={finishSignup} className="formBtn"><span>Finish</span></button>
                    </div>
            </Fragment>
        )
    }

}

export default SignupThree;