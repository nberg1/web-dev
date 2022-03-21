import React from "react";
import "../Styles/explore.css"
import "../Styles/index.css"

const PostSummaryItem = ({
     posts = {
         topic: 'Web Development',
         userName: 'ReactJS',
         time: '2h',
         title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
         image: '/images/ReactJS.png'
     }
    }) => {
    return(
        <div>
            <div className="overflow-hidden d-flex wd-font-color-gray pt-3 pb-3 ps-3 pe-3 wd-who-to-follow-bg">
                <div className="float-start">
                    <div>{posts.topic}</div>
                    <span className="text-white fw-bold me-1">{posts.userName}</span>
                    <img className="wd-tuit-emoji" width="18px" height="18px"  src="/images/Twitter_Verified_Badge.svg.png"/>
                    <span> - {posts.time}</span>
                    <div className="text-white fw-bold">{posts.title}</div>
                    <div>{posts.tweets ? posts.tweets : ''} Tuits</div>
                </div>
                <div className="ms-auto">
                    <img className="rounded-3 justify-content-center" width="100px" heigh="100px" src={posts.image}/>
                </div>
            </div>
        </div>
    );
}
export default PostSummaryItem;