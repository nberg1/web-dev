import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";
import "../Styles/explore.css"
import "../Styles/index.css"

const WhoToFollowList = () => {
    return(
        <div className="container border border-0 wd-who-to-follow-bg rounded d-none d-lg-block p-3">
            <div className="mb-4 wd-who-to-follow-bg text-white">
                <div style={{fontWeight: "bold"}}>Who to follow</div>
            </div>
            {who.map(who => {
                return(
                    <WhoToFollowListItem who={who}/>
                );
            })
            }
        </div>
    );
}
export default WhoToFollowList;