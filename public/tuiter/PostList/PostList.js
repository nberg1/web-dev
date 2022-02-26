import postContent from "./PostContent.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
        <div>
            <div class="wd-border-style">
                ${postContent.map(postContent => {
        return(PostItem(postContent));
    }).join('')}
            </div>
        </div>
    `);
}
export default PostList;