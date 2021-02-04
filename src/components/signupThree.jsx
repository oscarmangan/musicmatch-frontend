import React, {Component, Fragment} from "react";
import mmIcon from '../static/mm_icon_gradient.png';

class SignupThree extends Component {
    state = {}

    finishSignup = e => {
        e.preventDefault();
        this.props.register();
    }

    render() {
        const {miscInfo, handleChange, handleKeyUp} = this.props;

        return(
            <Fragment>
                <div className="circleIcon">
                    <img className="appIcon" alt="Musicmatch icon" src={mmIcon}/>
                </div>
                <form>
                    <div className="appForm">
                        <h2>Profile</h2>
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
                </form>
            </Fragment>
        )
    }

}

export default SignupThree;