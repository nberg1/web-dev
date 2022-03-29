import React from "react";
import PostItem from "../PostList/PostItem";
import "../Styles/explore.css";
import "../Styles/index.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfileItem = ({profileData}) => {
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
                    <button className="bg-black border-dark text-white float-end rounded-pill p-2 ps-3 pe-3">Save</button>
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
                            <input type="text" className="form-control bg-black border-1 border-dark mb-4 text-white" id="fullName" value={profileData.fullName}/>
                        </div>
                        <div className="form-group">
                            <label for="bio">Bio</label>
                            <textarea type="text" rows="4" className="form-control input-group-lg bg-black border-1 border-dark mb-4 text-white" id="bio" value={profileData.bio}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="location">Location</label>
                        <input type="text" className="form-control bg-black border-1 border-dark mb-4 text-white" id="location" value={profileData.location}/>
                    </div>
                    <div className="form-group">
                        <label for="dob">Birthdate</label>
                        <div/>
                        <input type="date" cid="dob" value={profileData.dateOfBirth}/>
                    </div>
                    <div/>
                </form>
            </div>
        </>
    );
}
export default EditProfileItem;