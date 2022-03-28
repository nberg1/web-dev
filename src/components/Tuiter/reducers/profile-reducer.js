import React from "react";
import "../Styles/index.css";
import {Link} from "react-router-dom";

const profileData = [
    {
        firstName: "Nicole",
        lastName: "Berg",
        handle: "nberg",
        profilePicture: "/images/nicole_berg_image.jpg",
        bannerPicture: "images/banner.jpg",
        bio: "Software Engineer.",
        location: "Boston, MA",
        dateOfBirth: "05/28/1993",
        dateJoined: "03/2019",
        followingCount: 312,
        followersCount: 180
    }
];

const profileReducer = (state = profileData) => {
    return(
        <div>
            <div className="d-flex overflow-visible mt-3 pb-1 pe-4 me-5 pe-5 wd-font-color-gray">
                <a className="d-flex flex-row ms-3 text-white text-decoration-none">
                    {/*TODO: correct link to previous page*/}
                    <Link className= "text-white text-decoration-none d-inline-flex flex-row align-items-center me-5" to="/Tuiter/">
                        <i className="fa fa-arrow-left"></i>
                    </Link>
                </a>
                <div>
                    <h5 className="mb-0 fw-bold">Nicole Berg</h5>
                    <span>10 Tuits</span>
                </div>
            </div>

            <div>
                <img className="position-relative" width="100%" height="200px" src="/images/banner.jpg"/>
                <img className="rounded-circle border-2 position-relative" width="125px" height="125px"
                     style={{
                         borderStyle: "solid",
                         borderColor: "black",
                         zIndex: 1
                     }}
                     src="/images/nicole_berg_image.jpg"/>
            </div>
            <div className="position-relative mt-3">
                <div className="float-end">
                    <button className="bg-black border-dark text-white float-end rounded-pill p-2 ps-3 pe-3">Edit profile</button>
                </div>
                <div>
                    <h5 className="fw-bold mb-0">Nicole Berg</h5>
                </div>
                <div className="wd-font-color-gray mb-3">
                    @nicole
                </div>
                <div>
                    Full time student pursuing a Master's degree in Computer Science.
                </div>
                <div className="d-flex justify-content-between overflow-visible mt-3 pb-1 pe-4 me-5 pe-5 wd-font-color-gray">
                    <span><i className="fa fa-map-marker text-dark"></i> Boston, MA</span>
                    <span><i className="fa fa-birthday-cake text-dark"></i> Born May 28, 1993</span>
                    <span><i className="fa fa-calendar text-dark"></i> Joined March 2019</span>
                </div>
                <div className="d-flex float-start justify-content-around overflow-visible mt-3 pb-1 pe-4 me-5 pe-5 wd-font-color-gray">
                    <span className="d-flex me-3">
                        <span className="me-1 text-white fw-bold">312</span>
                        Following
                    </span>
                    <span>
                        <span className="me-1 text-white fw-bold">180</span>
                        Followers</span>
                </div>
            </div>
        </div>
    );
}

export default profileReducer;