import React from "react";
import {Link} from "react-router-dom";
import HomeScreen from "../HomeScreen";
import "../Styles/explore.css"
import "../Styles/index.css"


const NavigationSidebar = (
    {active = 'explore'
    }) => {
    return(
        <>
            <nav className="nav nav-pills flex-column bg-black position-relative">
                <a className="nav-link mb-2" href="#">
                    <i className="fab fa-twitter me-1 p-2 text-white"></i>
                </a>
                <a id="home"
                   className={"nav-link ${active == 'home' ? 'active' : ''} mb-2 text-white d-inline-flex flex-row align-items-center"}>
                    <i className="fa fa-home fa-1x me-1 p-2 text-white"></i>
                    <span className="d-none d-xl-block">Home</span>
                </a>
                <a id="explore"
                   className={"nav-link ${active == 'explore' ? 'active' : ''} mb-2 text-white d-inline-flex flex-row align-items-center"}
                   href="../ExploreScreen/explore.html">
                    <i className="fa fa-hashtag fa-1x me-2 p-2 text-white"></i>
                    <span className="d-none d-xl-block">Explore</span>
                </a>
                <a id="notifications"
                   className={"nav-link ${active == 'notifications' ? 'active' : ''} mb-2 text-white d-inline-flex flex-row align-items-center"}
                   href="../notifications.html">
                    <i className="fa fa-bell fa-1x me-2 p-2 text-white"></i>
                    <span className="d-none d-xl-block">Notifications</span>
                </a>
                <a id="messages"
                   className={"nav-link ${active == 'messages' ? 'active' : ''} mb-2 text-white d-inline-flex flex-row align-items-center"}
                   href="../messages.html">
                    <i className="fa fa-envelope fa-1x me-2 p-2 text-white"></i>
                    <span className="d-none d-xl-block">Messages</span>
                </a>
                <a id="bookmakrs"
                   className={"nav-link ${active == 'bookmarks' ? 'active' : ''} mb-2 text-white d-inline-flex flex-row align-items-center"}
                   href="../BookmarksScreen/index.html">
                    <i className="fa fa-bookmark fa-1x me-2 p-2 text-white"></i>
                    <span className="d-none d-xl-block">Bookmarks</span>
                </a>
                <a id="lists"
                   className={"nav-link ${active == 'lists' ? 'active' : ''}  mb-2 text-white d-inline-flex flex-row align-items-center"}
                   href="../lists.html">
                    <i className="fa fa-list fa-1x me-2 p-2 text-white"></i>
                    <span className="d-none d-xl-block">Lists</span>
                </a>
                <a id="profile"
                   className={"nav-link ${active == 'profile' ? 'active' : ''} mb-2 text-white d-inline-flex flex-row align-items-center"}
                   href="../profile.html">
                    <i className="fa fa-user fa-1x me-2 p-2 text-white"></i>
                    <span className="d-none d-xl-block">Profile</span>
                </a>
                <a id="more"
                   className={"nav-link ${active == 'more' ? 'active' : ''} mb-2 text-white d-inline-flex flex-row align-items-center ps-lg-2"}
                   href="../more.html">
                    <span className="fa-stack me-2">
                        <i className="fas fa-circle fa-stack-1x ms-md-0 text-white" width="100%" style={{fontSize: "25px"}}/>
                        <i className="fas fa-ellipsis-h fa-stack-1x" style={{color: "black"}}/>
                    </span>
                    <span className="d-none d-xl-block">More</span>
                </a>
                <button type="button"
                        className="wd-tuit-button rounded-pill btn-primary btn-block text-white p-2">Tuit
                </button>
            </nav>
        </>

    );
}
export default NavigationSidebar;
