import React, {Component, Fragment} from "react";
import mmIcon from '../static/mm_icon_gradient.png';
import uploadIcon from '../static/upload.png';
import delIcon from '../static/delete.png';

class SignupThree extends Component {
    state = {
        images: [],
        loc_limit: 50,
        img_files: [],
        isUploaded: [false, false, false],
        finishBtnSpan: "Finish"
    }

    //signup is complete, attempt to register and depending on success, go to signupComplete
    //or display the error as to why
    nextForm = (e) => {
        this.setState({
            finishBtnSpan: "Please wait..."
        });
        const {registerUser} = this.props;
        registerUser(e);
    }

    //go back to the last stage in the registration process
    backForm = e => {
        e.preventDefault();
        this.props.prevStage();
    }

    //function to change the upload icon for each image uploaded as a preview of the
    //image that was uploaded by the user
    handleImageUpload = (e, id) => {
        const {handleImagesState} = this.props;
        let index = id;
        if(e.target.files && e.target.files[0]){
            let reader = new FileReader();
            //get the initial state and change the image to the uploaded one
            reader.onloadend = (e) => {

                //change the state index for the image uploaded
                let booleans = this.state.isUploaded;
                let images = this.state.images;
                booleans[index] = true;
                images[index] = {"image": e.target.result};

                this.setState({
                    images: images,
                    isUploaded: booleans
                });
            }
            reader.readAsDataURL(e.target.files[0]);
            let files = [...this.state.img_files];
            files[index] = {"image_file": e.target.files[0]};

            //add the new images to the overall signupState
            //use a callback to ensure the images are added after
            //the current state is altered
            this.setState({
                img_files: files
            }, () => {
                handleImagesState(this.state.img_files);
            });
        }
    }

    //function to handle the changes made on the range limit field
    handleLimit = (e) => {
        const {handleChange} = this.props;
        let limit_val = e.target.value;
        this.setState({
            loc_limit: limit_val
        })
        handleChange('loc_limit');
    }

    //function to remove an image uploaded
    removeUpload = (e, id) => {
        let index = id;
        let removeBooleans = [...this.state.isUploaded];
        let removeImages = [...this.state.images];

        removeBooleans[index] = false;
        removeImages[index] = null;
        removeImages.splice(index, 1);
        this.setState({
            images: removeImages,
            isUploaded: removeBooleans
        });
    }

    render() {
        const {miscInfo, handleChange, handleKeyUp} = this.props;

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
                                        <img className="uploadedImg" alt="Upload icon" src={this.state.images[0].image}/>
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
                                        <img className="uploadedImg" alt="Upload icon" src={this.state.images[1].image}/>
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
                                        <img className="uploadedImg" alt="Upload icon" src={this.state.images[2].image}/>
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
                            placeholder="Music URL"
                            defaultValue={miscInfo.music_url}
                            onChange={handleChange('music_url')}
                        />
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
                        /><br/>
                        <label htmlFor="distance">Distance Limit (km)</label><br/>
                        <input type="text"
                               id="rangeValue"
                               disabled={true}
                               placeholder={miscInfo.loc_limit + " kilometres"}
                               className="limitValueBox"
                        />
                        <input type="range"
                            id="distance"
                            min="1"
                            max="100"
                            step="1"
                            onChange={handleChange('loc_limit')}
                        />
                        <button onClick={(e) => this.nextForm(e)} className="formBtn"><span>{this.state.finishBtnSpan}</span></button>
                        <button onClick={(e) => this.backForm(e)} className="backBtn"><span>Back</span></button>
                    </div>
            </Fragment>
        )
    }

}

export default SignupThree;