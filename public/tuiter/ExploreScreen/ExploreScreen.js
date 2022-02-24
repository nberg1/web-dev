import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList";
import WhoToFollowList from "../WhoToFollowList";
(function ($){
    $(`#wd-explore`).append(`
        <div class="row mt-2">
            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-auto col-sm-auto col-auto me-1 ms-lg-4">
                ${NavigationSidebar()}
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-8 col-sm-8 col-10 p-0 me-2 ms-lg-2">
                ${PostSummaryList()}
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 p-0 ms-2">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);