const WhoToFollowListItem = (who) => {
    return(`
        <div class="d-flex flex-row mt-4 wd-who-to-follow-bg">
            <div>
                <img class="rounded-circle me-xxl-3 me-xl-2 me-lg-0" width="48px" height="48px" src=${who.avatarIcon}>
            </div>
            <div class="overflow-visible">
                <div class="position-absolute">
                <span class="text-white wd-white-space">${who.userName}
                    <img class="wd-tuit-emoji" src="../images/Twitter_Verified_Badge.svg.png">
                </span></br>
                    <span class="wd-font-color-gray">@${who.handle}</span>
                </div>
            </div>
            <div class="ms-auto">
                <button type="button" class="wd-tuit-button text-white float-end rounded-pill p-2 ps-3 pe-3">Follow</button>
            </div>
        </div>
    `);
}
export default WhoToFollowListItem;