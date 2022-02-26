import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import BookmarkList from "./BookmarkList.js";

(function ($){
    $(`#wd-explore`).append(`
        <div class="row mt-3  mb-3">
            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 me-1 ms-lg-4">
                ${NavigationSidebar('bookmarks')}
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-9 col-sm-9 col-9 p-0 me-3 ms-lg-2">
                <div class="wd-border-style overflow-hidden wd-font pb-2 wd-font-13">
                    <div class="wd-margin-left-16 wd-margin-top-12">
                        <span class="wd-font-color-white wd-font-weight wd-font-20">Bookmarks</span>
                        <div class="wd-float-right wd-padding-right-12">
                            <a href="#">
                                <svg width="24px" height="24px">
                                    <g>
                                        <circle r="2" cx="5" cy="12" fill="rgb(29, 161, 242)"></circle>
                                        <circle r="2" cx="12" cy="12" fill="rgb(29, 161, 242)"></circle>
                                        <circle r="2" cx="19" cy="12" fill="rgb(29, 161, 242)"></circle>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <span class="wd-font-color-gray wd-font-13">@WebDev</span>
                        </div>
                    </div>
                </div>
                ${BookmarkList()}
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-4 d-none d-lg-block p-0 ms-2">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);