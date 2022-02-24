import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const WhoToFollowList = () => {
    return(`
        <div>
            <div class="wd-border-style">
                ${posts.map(posts => {
                    return(PostSummaryItem(posts));
                }).join('')}
            </div>
        </div>
    `);
}
export default WhoToFollowList;