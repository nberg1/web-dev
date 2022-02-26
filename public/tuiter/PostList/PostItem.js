const PostItem = (post) => {
    return(`
        <div class="d-flex flex-row overflow-hidden wd-border-style wd-font wd-font-13">
            <div class="float-start ms-3 mt-3">
                <img class="rounded-circle" width="48px" height="48px" src=${post.UserImage}>
            </div>
            <div class="float-end mt-3 ms-3 wd-font-15 wd-font-color-gray me-3">
                <span class="wd-font-color-white">${post.User}</span>
                <img class="wd-tuit-emoji" src="../images/Twitter_Verified_Badge.svg.png">
                <span>@${post.userName} · ${post.time}</span>
                <div class="wd-font-color-white" style="max-width: 506px">${post.title}</div>
                <div class="mt-2 border-light border-1">
                    <img class="wd-article-image wd-border-style rounded-3 pe-4" style="max-width: 100%; background-size: cover" height="264px" src=${post.ArticleImage}>
                        <div class="p-2">
                            <div class="wd-font-color-white" style="max-width: 506px">${post.ArticleTitle ? post.ArticleTitle : ''}</div>
                            <div style="max-width: 506px">${post.ArticleSummary ? post.ArticleSummary : ''}</div>
                            <div>${post.ArticleUrl ? post.ArticleUrl : ''}</div>
                        </div>
                    <div class="d-flex justify-content-between overflow-visible mt-3 pb-3 pe-4" width="504px">
                        <div>
                            <a href="#" class="wd-nav-tabs-no-underline wd-font-color-gray">
                                <div>
                                    <i class="fas fa-comment me-2"></i>
                                    <span class="wd-font-13">${post.Reply ? post.Reply : ''}</span>
                                </div>
                            </a>
                        </div>
                        <div style="max-width: 506px">
                            <a href="#" class="wd-nav-tabs-no-underline wd-font-color-gray">
                                <div class="wd-retuit-icon-hover">
                                    <i class="fas fa-retweet me-2"></i>
                                    <span class="wd-font-13">${post.ReTuit ? post.ReTuit : ''}</span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#" class="wd-nav-tabs-no-underline wd-font-color-gray">
                                <div>
                                    <i class="fas fa-heart me-2"></i>
                                    <span class="wd-font-13">${post.Like ? post.Like : ''}</span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#" class="wd-nav-tabs-no-underline wd-font-color-gray">
                                <div>
                                    <i class="fas fa-share"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
}
export default PostItem;