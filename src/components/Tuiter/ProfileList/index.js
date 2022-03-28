import React from "react";
import "../Styles/explore.css"
import "../Styles/index.css"
import {useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";

const ProfileList = () => {
    const profileData = useSelector(
        state => state.profileData);
    return(
        <div>
            {
                profileData.map && profileData.map(profileData =>
                    <ProfileItem profileData={profileData}/>)
            }
        </div>
    );
}
export default ProfileList;