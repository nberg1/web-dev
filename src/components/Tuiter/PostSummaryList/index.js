import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem from "./PostSummaryItem";
import "../Styles/explore.css"
import "../Styles/index.css"

const PostSummaryList = () => {
    const posts = useSelector(
        state => state.posts);
    return(
        <div className="container p-0">
            {posts.map(posts => {
                return(<PostSummaryItem posts={posts}/>);
            })
            }
        </div>
    );
}
export default PostSummaryList;