import "../Styles/index.css"

const WhoToFollowListItem = ({
                      who = {
                          avatarIcon: '/images/nasa.png',
                          userName: 'NASA',
                          handle: 'NASA'
                      }
                  }) => {
    return(
        <div className="d-flex flex-row mt-4 wd-who-to-follow-bg">
            <div>
                <img className="rounded-circle me-xxl-3 me-xl-2 me-lg-0" width="48px" height="48px" src={who.avatarIcon}/>
            </div>
            <div className="overflow-visible">
                <div className="position-absolute">
                <span className="text-white wd-white-space">{who.userName}
                    <img className="wd-tuit-emoji ms-1" width="18px" height="18px" src="/images/Twitter_Verified_Badge.svg.png"/>
                </span>
                <div className="wd-font-color-gray">@{who.handle}</div>
            </div>
        </div>
    <div className="ms-auto">
        <button type="button" className="wd-tuit-button text-white float-end rounded-pill btn-primary btn-block text-white p-2 ps-3 pe-3">Follow</button>
    </div>
</div>
    );
}
export default WhoToFollowListItem;