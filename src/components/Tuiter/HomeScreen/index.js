import React from "react";
import "../Styles/explore.css"
import "../Styles/index.css"
import PostList from "../PostList";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
    return(
        <div>
            <WhatsHappening/>
            <PostList/>
        </div>
    );
};
export default HomeScreen;