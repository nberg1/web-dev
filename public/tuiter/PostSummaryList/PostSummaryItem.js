const PostSummaryItem = (post) => {
    return(`
        <div class="overflow-hidden d-flex wd-font-color-gray p-3">
            <div class="float-start">
                <div>${post.topic}</div>
                <span class="text-white fw-bold">${post.userName}</span>
                <img class="wd-tuit-emoji" src="../images/Twitter_Verified_Badge.svg.png">
                <span> - ${post.time}</span>
                <div class="text-white fw-bold">${post.title}</div>
                <div>${post.tweets ? post.tweets : ''}</div>
            </div>
            <div class="ms-auto">
                <img class="rounded-3 justify-content-center" width="100px" heigh="100px" src=${post.image}>
            </div>
        </div>
    `);
}
export default PostSummaryItem;