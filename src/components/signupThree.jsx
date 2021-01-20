import React, {Component, Fragment} from "react";
import mmIcon from '../static/mm_icon_gradient.png';

class SignupThree extends Component {
    state = {}

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
                                placeholder="Bio"
                                rows="8"
                        />
                    </div>
                </form>
            </Fragment>
        )
    }

}

export default SignupThree;