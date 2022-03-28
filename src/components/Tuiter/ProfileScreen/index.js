import React from "react";
import "../Styles/explore.css"
import "../Styles/index.css"
import ProfileList from "../ProfileList";

const ProfileScreen = () => {
    return(
        <div className="container wd-border-style border-bottom-0 ps-2 pe-2">
            <ProfileList/>
        </div>
    );
};
export default ProfileScreen;