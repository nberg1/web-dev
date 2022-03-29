import React from "react";
import PostItem from "../PostList/PostItem";
import "../Styles/explore.css";
import "../Styles/index.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileItem = ({profileData}) => {
    return(
        <>
            <div className="d-flex overflow-visible mt-3 pb-1 pe-4 me-5 pe-5 wd-font-color-gray">
                <a className="d-flex flex-row ms-3 text-white text-decoration-none">
                    {/*TODO: correct link to previous page*/}
                    <Link className= "text-white text-decoration-none d-inline-flex flex-row align-items-center me-5" to="/Tuiter/">
                        <i className="fa fa-arrow-left"></i>
                    </Link>
                </a>
                <div>
                    <h5 className="mb-0 fw-bold">{profileData.firstName} {profileData.lastName}</h5>
                    <span>10 Tuits</span>
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
                <div className="float-end">
                    <Link className= "text-white text-decoration-none d-inline-flex flex-row align-items-center" to="/Tuiter/edit">
                        <button className="bg-black border-dark text-white float-end rounded-pill p-2 ps-3 pe-3">Edit profile</button>
                    </Link>
                </div>
                <div>
                    <h5 className="fw-bold mb-0">{profileData.firstName} {profileData.lastName}</h5>
                </div>
                <div className="wd-font-color-gray mb-3">@{profileData.handle}</div>
                <div>{profileData.bio}</div>
                <div className="d-flex justify-content-between overflow-visible mt-3 pb-1 pe-4 me-5 pe-5 wd-font-color-gray">
                    <span><i className="fa fa-map-marker text-dark"></i> {profileData.location}</span>
                    <span><i className="fa fa-birthday-cake text-dark"></i> Born {profileData.dateOfBirth}</span>
                    <span><i className="fa fa-calendar text-dark"></i> Joined {profileData.dateJoined}</span>
                </div>
                <div className="d-flex float-start justify-content-around overflow-visible mt-3 pb-1 pe-4 me-5 pe-5 wd-font-color-gray">
                    <span className="d-flex me-3">
                        <span className="me-1 text-white fw-bold">{profileData.followingCount}</span>
                        Following
                    </span>
                    <span className="d-flex me-3">
                        <span className="me-1 text-white fw-bold">{profileData.followersCount}</span>
                        Followers
                    </span>
                </div>
            </div>
        </>
    );
}
export default ProfileItem;