import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";

const Tuiter = () => {
    return(
        <>
            <NavigationSidebar active="explore"/>
            <WhoToFollowListItem who={{
                avatarIcon: 'images/virgin_logo.png',
                userName: 'Virgin Galactic',
                handle: 'virgingalactic'
            }}/>
            {/*<h1>Tuiter</h1>*/}
            {/*<Link to="/hello">*/}
            {/*    Hello*/}
            {/*</Link> |*/}
            {/*<Link to="/">*/}
            {/*    Labs*/}
            {/*</Link>*/}
        </>
    )
};

export default Tuiter;