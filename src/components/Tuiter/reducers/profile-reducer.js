import React from "react";
import "../Styles/index.css";
import {Link} from "react-router-dom";
import profileData from "../data/profileData.json";

const profileReducer = (state = profileData, action) => {
    switch (action.type){
        case 'save':
            return action.profileData;
        case 'update-Profile':
            return state.map(profileData => {
                // profileData.fullName = action.profileData.fullName;
                console.log(action.profileData.fullName);
                // if(postContent._id === action.postContent._id) {
                //     if(postContent.liked === true) {
                //         postContent.liked = false;
                //         postContent.likes--;
                //     } else {
                //         postContent.liked = true;
                //         postContent.likes++;
                //     }
                //     return postContent;
                // } else {
                //     return postContent;
                // }
            })
        default:
            return state;
    }
}

export default profileReducer;