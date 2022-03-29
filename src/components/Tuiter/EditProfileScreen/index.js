import React from "react";
import "../Styles/explore.css"
import "../Styles/index.css"
import EditProfileList from "../EditProfileList";

const EditProfileScreen = () => {
    return(
        <div className="container wd-border-style border-bottom-0 ps-2 pe-2">
            <EditProfileList/>
        </div>
    );
};
export default EditProfileScreen;