import React from "react";
import "../Styles/explore.css"
import "../Styles/index.css"
import NavigationSidebar from "../NavigationSidebar";
import PostList from "../PostList";
import PostSummaryList from "../PostSummaryList";

const HomeScreen = () => {
    return(
        <PostList/>

        // <div className="row mt-2">
        //     {/*<div className="col-2 col-md-2 col-lg-1 col-xl-2">*/}
        //     {/*    <NavigationSidebar active="home"/>*/}
        //     {/*</div>*/}
        //     {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
        //     {/*    <PostSummaryList/>*/}
        //     {/*</div>*/}
        // </div>
    );
};
export default HomeScreen;