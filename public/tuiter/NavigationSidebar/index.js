const NavigationSidebar = (active) => {
    return(`
            <nav class="nav nav-pills flex-column bg-black position-relative">
                <a class="nav-link mb-2" href="#">
                    <i class="fab fa-twitter me-1 p-2 text-white"></i>
                </a>
                <a id="home" class="nav-link ${active == 'home' ? 'active' : ''} mb-2 text-white d-inline-flex flex-row align-items-center" href="../HomeScreen/index.html">
                    <i class="fa fa-home fa-1x me-1 p-2 text-white"></i>
                    <span class="d-none d-xl-block">Home</span>
                </a>
                <a id="explore" class="nav-link ${active == 'explore' ? 'active' : ''} mb-2 text-white d-inline-flex flex-row align-items-center" href="../ExploreScreen/explore.html">
                    <i class="fa fa-hashtag fa-1x me-2 p-2 text-white"></i>
                    <span class="d-none d-xl-block">Explore</span>
                </a>
                <a id="notifications" class="nav-link ${active == 'notifications' ? 'active' : ''} mb-2 text-white d-inline-flex flex-row align-items-center" href="../notifications.html">
                    <i class="fa fa-bell fa-1x me-2 p-2 text-white"></i>
                    <span class="d-none d-xl-block">Notifications</span>
                </a>
                <a id="messages" class="nav-link ${active == 'messages' ? 'active' : ''} mb-2 text-white d-inline-flex flex-row align-items-center" href="../messages.html">
                    <i class="fa fa-envelope fa-1x me-2 p-2 text-white"></i>
                    <span class="d-none d-xl-block">Messages</span>
                </a>
                <a id="bookmakrs" class="nav-link ${active == 'bookmarks' ? 'active' : ''} mb-2 text-white d-inline-flex flex-row align-items-center" href="../bookmarks.html">
                    <i class="fa fa-bookmark fa-1x me-2 p-2 text-white"></i>
                    <span class="d-none d-xl-block">Bookmarks</span>
                </a>
                <a id="lists" class="nav-link ${active == 'lists' ? 'active' : ''}  mb-2 text-white d-inline-flex flex-row align-items-center" href="../lists.html">
                    <i class="fa fa-list fa-1x me-2 p-2 text-white"></i>
                    <span class="d-none d-xl-block">Lists</span>
                </a>
                <a id="profile" class="nav-link ${active == 'profile' ? 'active' : ''} mb-2 text-white d-inline-flex flex-row align-items-center" href="../profile.html">
                    <i class="fa fa-user fa-1x me-2 p-2 text-white"></i>
                    <span class="d-none d-xl-block">Profile</span>
                </a>
                <a id="more" class="nav-link ${active == 'more' ? 'active' : ''} mb-2 text-white d-inline-flex flex-row align-items-center ps-lg-2" href="../more.html">
                    <span class="fa-stack me-2">
                        <i class="fas fa-circle fa-stack-1x ms-md-0 text-white" width="100%" style="font-size:25px"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x" style="color: black"></i>
                    </span>
                    <span class="d-none d-xl-block">More</span>
                </a>
                <button type="button" class="wd-tuit-button rounded-pill btn-primary btn-block text-white p-2">Tuit</button>
            </nav>
    `);
}
export default NavigationSidebar;
