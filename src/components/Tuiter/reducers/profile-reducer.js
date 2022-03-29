import React from "react";
import "../Styles/index.css";
import {Link, Route, useHistory, useNavigate} from "react-router-dom";
import profileData from "../data/profileData.json";
import ProfileScreen from "../ProfileScreen";
const profileReducer = (state = profileData, action) => {
    switch (action.type){
        case 'save':
            console.log("testing");
        default:
            return state;
    }
}

export default profileReducer;