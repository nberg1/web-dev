import React from "react";
import "../Styles/explore.css"
import "../Styles/index.css"
import {useSelector} from "react-redux";
import EditProfileItem from "./EditProfileItem";

const EditProfileList = () => {
    const profileData = useSelector(
        state => state.profileData);
    return(
        <div>
            {
                profileData.map && profileData.map(profileData =>
                    <EditProfileItem profileData={profileData}/>)
            }
        </div>
    );
}
export default EditProfileList;