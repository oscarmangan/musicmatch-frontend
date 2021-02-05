import React, {Component, Fragment} from "react";
import mmIcon from '../static/mm_icon_gradient.png';
import uploadIcon from '../static/upload.png';

class SignupThree extends Component {
    state = {
        images: [],
        isUploaded: [false, false, false]
    }

    finishSignup = e => {
        e.preventDefault();
        this.props.register();
    }

    handleImageUpload = (e) => (id) => {

        if(e.target.files && e.target.files[id]){
            let reader = new FileReader();

            //get the initial state and change the image to the uploaded one
            reader.onload = () => {

                //change the state index for the image uploaded
                let uploadBooleans = this.state.isUploaded;
                let uploadImages = this.state.images;
                uploadBooleans[id] = true;
                uploadImages[id] = e.target.result;

                this.setState({
                    images: uploadImages,
                    isUploaded: uploadBooleans
                });
                console.log(this.state.images);
            }

            reader.readAsDataURL(e.target.files[id]);
        }

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
                        {this.state.isUploaded[0] ? (
                            <label htmlFor="imageInputOne" className="uploadBtn">
                                <img className="uploadIcon" alt="Upload icon" src={this.state.images[0]}/>
                            </label>
                        ) : (
                            <label htmlFor="imageInputOne" className="uploadBtn">
                                <img className="uploadIcon" alt="Upload icon" src={uploadIcon}/>
                            </label>
                        )}
                        <input
                            id="imageInputOne"
                            type="file"
                            multiple={true}
                            accept=".jpg,.jpeg,.png"
                            onChange={(e) => this.handleImageUpload(e, 0)}
                            style={{display: "none"}}
                        />
                        <label htmlFor="imageInputTwo" className="uploadBtn">
                            <img className="uploadIcon" alt="Upload icon" src={uploadIcon}/>
                        </label>
                        <input
                            id="imageInputTwo"
                            type="file"
                            multiple={true}
                            accept=".jpg,.jpeg,.png"
                            onChange={(e) => this.handleImageUpload(e, 1)}
                            style={{display: "none"}}
                        />
                        <label htmlFor="imageInputThree" className="uploadBtn">
                            <img className="uploadIcon" alt="Upload icon" src={uploadIcon}/>
                        </label>
                        <input
                            id="imageInputThree"
                            type="file"
                            multiple={true}
                            accept=".jpg,.jpeg,.png"
                            onChange={(e) => this.handleImageUpload(e, 2)}
                            style={{display: "none"}}
                        />
                        <input
                            placeholder="Facebook URL"
                            defaultValue={miscInfo.facebook}
                            onChange={handleChange('facebook')}
                        />
                        <input
                            placeholder="Twitter URL"
                            defaultValue={miscInfo.twitter}
                            onChange={handleChange('twitter')}
                        />
                        <input
                            placeholder="Instagram URL"
                            defaultValue={miscInfo.instagram}
                            onChange={handleChange('instagram')}
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
                        <button onClick={this.finishSignup} className="formBtn"><span>Finish</span></button>
                    </div>
            </Fragment>
        )
    }

}

export default SignupThree;