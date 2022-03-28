import React from "react";
import "../Styles/explore.css"
import "../Styles/index.css"
import ProfileReducer from "../reducers/profile-reducer";

const ProfileScreen = () => {
    return(
        <div>
            <ProfileReducer/>
        </div>
    );
};
export default ProfileScreen;