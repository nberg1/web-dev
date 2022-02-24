import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
        <div class="container border border-0 wd-who-to-follow-bg rounded d-none d-lg-block p-3">
            <div class="mb-4 wd-who-to-follow-bg text-white">
                <div style="font-weight: bold">Who to follow</div>
            </div>
            ${who.map(who => {
                    return(WhoToFollowListItem(who));
                }).join('')}
        </div>
    `);
}
export default WhoToFollowList;