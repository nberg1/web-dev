import React, {useState} from "react";
import PostItem from "../PostList/PostItem";
import "../Styles/explore.css";
import "../Styles/index.css";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

const EditProfileItem = ({profileData}) => {
    const dispatch = useDispatch();
    const profiles = useSelector(state => state.profileData);

    let [fullName, setFullName] = useState(profileData.fullName);
    const NameChangeHandler = (event) => {
        const newFullName = event.target.value;
        setFullName(newFullName);
    }
    let [bio, setBio] = useState(profileData.bio);
    const BioChangeHandler = (event) => {
        const newBio = event.target.value;
        setBio(newBio);
    }
    let [location, setLocation] = useState(profileData.location);
    const LocationChangeHandler = (event) => {
        const newLocation = event.target.value;
        setLocation(newLocation);
    }
    let [dob, setDob] = useState(profileData.dateOfBirth);
    const DobChangeHandler = (event) => {
        const newDob = event.target.value;
        setDob(newDob);
    }

    const navigate = useNavigate();
    const updateProfile = (profileData) => {
        navigate('/Tuiter/profile');
        dispatch({type: 'save', profileData});

    };

    return(
        <>
            <div className="d-flex overflow-visible mt-2 pb-1 pe-4 me-5 pe-5 wd-font-color-gray">
                <a className="d-flex flex-row ms-3 text-white text-decoration-none">
                    <Link className= "text-white text-decoration-none d-inline-flex flex-row align-items-center me-4" to="/Tuiter/profile">
                        <i className="fa fa-times align-items-center"></i>
                    </Link>
                </a>
                <div>
                    <h5 className="mb-0 fw-bold">Edit profile</h5>
                </div>
                <div className="float-end">
                    <button className="bg-black border-dark text-white float-end rounded-pill p-2 ps-3 pe-3"
                            onClick={() =>
                                updateProfile(profileData)}
                    >Save</button>
                </div>
            </div>
            <div>
                <img className="position-relative" width="100%" height="200px" src={profileData.bannerPicture}/>
                <img className="rounded-circle border-2 position-relative" width="125px" height="125px"
                     style={{
                         borderStyle: "solid",
                         borderColor: "black",
                         zIndex: 1
                     }}
                     src={profileData.profilePicture}/>
            </div>
            <div className="position-relative mt-3">
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label for="fullName">Name</label>
                            <input type="text" className="form-control bg-black border-1 border-dark mb-4 text-white" id="fullName" value={fullName} onChange={NameChangeHandler}/>
                        </div>
                        <div className="form-group">
                            <label for="bio">Bio</label>
                            <textarea type="text" rows="4" className="form-control input-group-lg bg-black border-1 border-dark mb-4 text-white" id="bio" value={bio} onChange={BioChangeHandler} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="location">Location</label>
                        <input type="text" className="form-control bg-black border-1 border-dark mb-4 text-white" id="location" value={location} onChange={LocationChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label for="dob">Birthdate</label>
                        <div/>
                        <input type="date" id="dob" value={dob} onChange={DobChangeHandler}/>
                    </div>
                    <div/>
                </form>
            </div>
        </>
    );
}
export default EditProfileItem;