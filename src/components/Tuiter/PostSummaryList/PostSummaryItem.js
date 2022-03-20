import React from "react";
import "../Styles/explore.css"
import "../Styles/index.css"

const PostSummaryItem = ({
     post = {
         "topic": "Web Development",
         "userName": "TESTING",
         "time": "2h",
         "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
         "image": "../images/ReactJS.png"
     }
    }) => {
    return(
            <div className="overflow-hidden d-flex wd-font-color-gray pt-3 pb-3">
                <div className="float-start">
                    <div>{post.topic}</div>
                    <span className="text-white fw-bold me-1">{post.userName}</span>
                    <img className="wd-tuit-emoji" width="18px" height="18px"  src="images/Twitter_Verified_Badge.svg.png"/>
                        <span> - {post.time}</span>
                        <div className="text-white fw-bold">{post.title}</div>
                        <div>{post.tweets ? post.tweets : ''} Tuits</div>
                </div>
                <div className="ms-auto">
                    <img className="rounded-3 justify-content-center" width="100px" heigh="100px" src={post.image}/>
                </div>
            </div>
    );
}
export default PostSummaryItem;