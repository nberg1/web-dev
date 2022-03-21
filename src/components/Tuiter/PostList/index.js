import React from "react";
import postContent from "./postContent.json";
import PostItem from "./PostItem";
import "../Styles/explore.css"
import "../Styles/index.css"

const PostList = () => {
    return(
        <div>
            <div className="container wd-border-style border-bottom-0 ps-0 pe-0">
                {postContent.map(postContent => {
                    return(<PostItem postContent={postContent}/>);
                })
            }
            </div>
        </div>
    );
}
export default PostList;