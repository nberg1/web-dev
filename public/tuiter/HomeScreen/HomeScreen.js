import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import PostList from "../PostList/PostList.js";

(function ($){
    $(`#wd-explore`).append(`
        <div class="row mt-2">
            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 me-1 ms-lg-4">
                ${NavigationSidebar('home')}
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-9 col-sm-9 col-9 p-0 me-2 ms-lg-2">
            ${PostList()}
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-4 d-none d-lg-block p-0 ms-2">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);