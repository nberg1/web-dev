import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const WhoToFollowList = () => {
    return(`
        <div>
            <div class="wd-border-style">
                <div class="container position-relative ps-0 pe-0">
                    <img width="100%" heigh="500px" src="../images/SpaceX_Starship.jpg">
                    <div class="wd-bottom-left text-white">SpaceX's Starship</div>
                </div>
                ${posts.map(posts => {
                    return(PostSummaryItem(posts));
                }).join('')}
            </div>
        </div>
    `);
}
export default WhoToFollowList;