import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
import "../Styles/explore.css"
import "../Styles/index.css"

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
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