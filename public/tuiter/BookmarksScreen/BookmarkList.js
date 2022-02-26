import bookmarkContent from "./bookmarkContent.js";
import PostItem from "../PostList/PostItem.js";

const PostList = () => {
    return(`
        <div>
            <div class="wd-border-style">
                ${bookmarkContent.map(bookmarkContent => {
        return(PostItem(bookmarkContent));
    }).join('')}
            </div>
        </div>
    `);
}
export default PostList;