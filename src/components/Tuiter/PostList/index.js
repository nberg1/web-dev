import React from "react";
import PostItem from "./PostItem";
import "../Styles/explore.css";
import "../Styles/index.css";
import {useSelector} from "react-redux";

const PostList = () => {
    const postContent = useSelector(
        state => state.postContent);
    return(
            <div className="container wd-border-style border-bottom-1 ps-0 pe-0">
                <ul className="list-group">
                    {
                        postContent.map && postContent.map(postContent =>
                        <PostItem key={postContent._id}
                        postContent={postContent}/>)
                    }
                </ul>
            </div>
    );
}
export default PostList;