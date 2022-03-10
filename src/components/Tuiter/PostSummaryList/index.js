import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem";
import "../Styles/explore.css"
import "../Styles/index.css"

const PostSummaryList = () => {
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