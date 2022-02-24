const NavigationSidebar = () => {
    return(`
            <nav class="nav nav-pills flex-column bg-black position-relative">
                <a class="nav-link mb-2" href="#">
                    <i class="fab fa-twitter me-1 p-2 text-white"></i>
                </a>
                <a class="nav-link mb-2 text-white d-inline-flex flex-row align-items-center" href="home.html">
                    <i class="fa fa-home fa-1x me-1 p-2 text-white"></i>
                    <span class="d-none d-xl-block">Home</span>
                </a>
                <a class="nav-link mb-2 text-white d-inline-flex flex-row align-items-center" href="explore.html">
                    <i class="fa fa-hashtag fa-1x me-2 p-2 text-white" style="-webkit-text-stroke: 1px white;"></i>
                    <span class="d-none d-xl-block fw-bold">Explore</span>
                </a>
                <a class="nav-link mb-2 text-white d-inline-flex flex-row align-items-center" href="notifications.html">
                    <i class="fa fa-bell fa-1x me-2 p-2 text-white"></i>
                    <span class="d-none d-xl-block">Notifications</span>
                </a>
                <a class="nav-link mb-2 text-white d-inline-flex flex-row align-items-center" href="messages.html">
                    <i class="fa fa-envelope fa-1x me-2 p-2 text-white"></i>
                    <span class="d-none d-xl-block">Messages</span>
                </a>
                <a class="nav-link mb-2 text-white d-inline-flex flex-row align-items-center" href="bookmarks.html">
                    <i class="fa fa-bookmark fa-1x me-2 p-2 text-white"></i>
                    <span class="d-none d-xl-block">Bookmarks</span>
                </a>
                <a class="nav-link mb-2 text-white d-inline-flex flex-row align-items-center" href="lists.html">
                    <i class="fa fa-list fa-1x me-2 p-2 text-white"></i>
                    <span class="d-none d-xl-block">Lists</span>
                </a>
                <a class="nav-link mb-2 text-white d-inline-flex flex-row align-items-center" href="profile.html">
                    <i class="fa fa-user fa-1x me-2 p-2 text-white"></i>
                    <span class="d-none d-xl-block">Profile</span>
                </a>
                <a class="nav-link mb-2 text-white d-inline-flex flex-row align-items-center ps-lg-2" href="more.html">
                    <span class="fa-stack">
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
