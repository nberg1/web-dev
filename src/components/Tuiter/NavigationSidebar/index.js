import React from "react";
import {Link, NavLink} from "react-router-dom";
import "../Styles/explore.css"
import "../Styles/index.css"

const NavigationSidebar = (

    {active = 'home'
    }) => {
    return(
        <>
            <nav className="nav nav-pills flex-column bg-black position-relative">
                <a className="nav-link mb-2" href="#">
                    <i className="fab fa-twitter me-1 p-2 text-white"></i>
                </a>
                <NavLink id="home"
                   className={({isActive}) => `nav-link mb-2 text-white d-inline-flex flex-row align-items-center` + (isActive ? ' active' : '')}  to="/Tuiter/">
                    <i className="fa fa-home fa-1x me-1 p-2 text-white"></i>
                    <span className="d-none d-xl-block">Home</span>
                </NavLink>
                <NavLink id="explore"
                   className={({isActive}) =>  `nav-link mb-2 text-white d-inline-flex flex-row align-items-center` + (isActive ? ' active' : '')}  to="/Tuiter/explore">
                    <i className="fa fa-hashtag fa-1x me-2 p-2 text-white"></i>
                    <span className="d-none d-xl-block">Explore</span>
                </NavLink>
                <NavLink id="notifications"
                   className={({isActive}) =>  `nav-link mb-2 text-white d-inline-flex flex-row align-items-center` + (isActive ? ' active' : '')}  to="/Tuiter/notifications">
                    <i className="fa fa-bell fa-1x me-2 p-2 text-white"></i>
                    <span className="d-none d-xl-block">Notifications</span>
                </NavLink>
                <NavLink id="messages"
                   className={({isActive}) =>  `nav-link mb-2 text-white d-inline-flex flex-row align-items-center` + (isActive ? ' active' : '')}  to="/Tuiter/messages">
                    <i className="fa fa-envelope fa-1x me-2 p-2 text-white"></i>
                    <span className="d-none d-xl-block">Messages</span>
                </NavLink>
                <NavLink id="bookmarks"
                   className={({isActive}) =>  `nav-link mb-2 text-white d-inline-flex flex-row align-items-center` + (isActive ? ' active' : '')}  to="/Tuiter/bookmarks">
                    <i className="fa fa-bookmark fa-1x me-2 p-2 text-white"></i>
                    <span className="d-none d-xl-block">Bookmarks</span>
                </NavLink>
                <NavLink id="lists"
                   className={({isActive}) =>  `nav-link mb-2 text-white d-inline-flex flex-row align-items-center` + (isActive ? ' active' : '')}  to="/Tuiter/lists">
                    <i className="fa fa-list fa-1x me-2 p-2 text-white"></i>
                    <span className="d-none d-xl-block">Lists</span>
                </NavLink>
                <NavLink id="profile"
                   className={({isActive}) =>  `nav-link mb-2 text-white d-inline-flex flex-row align-items-center` + (isActive ? ' active' : '')}  to="/Tuiter/profile">
                    <i className="fa fa-user fa-1x me-2 p-2 text-white"></i>
                    <span className="d-none d-xl-block">Profile</span>
                </NavLink>
                <NavLink id="more"
                   className={({isActive}) =>  `nav-link mb-2 text-white d-inline-flex flex-row align-items-center` + (isActive ? ' active' : '')}  to="/Tuiter/more">
                    <span className="fa-stack me-2">
                        <i className="fas fa-circle fa-stack-1x ms-md-0 text-white" width="100%" style={{fontSize: "25px"}}/>
                        <i className="fas fa-ellipsis-h fa-stack-1x" style={{color: "black"}}/>
                    </span>
                    <span className="d-none d-xl-block">More</span>
                </NavLink>
                <button type="button"
                        className="wd-tuit-button rounded-pill btn-primary btn-block text-white p-2">Tuit
                </button>
            </nav>
        </>

    );
}
export default NavigationSidebar;
