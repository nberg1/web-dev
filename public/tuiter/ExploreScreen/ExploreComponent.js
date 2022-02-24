import PostSummaryList from "../PostSummaryList";
const ExploreComponent = () => {
    return(`
        <div class=" container-fluid border-1 p-0">
            <div class="wd-overflow-hidden wd-border-style">
                <div>
                    <form>
                        <div class="mt-2 wd-overflow-hidden align-items-center d-flex">
                            <span class="wd-search-box wd-flex-grow" style="min-width: 56px;">
                                <i class="fa fa-search"></i>
                                <input type="text" class="wd-search-field wd-rounded-edges wd-font" width="100%" placeholder="Search Tuiter"/>
                            </span>
                            <span class="wd-float-right wd-gear-emoji justify-content-center">
                                <a class="wd-anchor-underline" href="explore-settings.html">
                                    <i class="fa fa-cog" style="color: white"></i>
                                </a>
                            </span>
                        </div>
                    </form>
                </div>
                <ul class="nav nav-tabs text-dark nav-fill" style="border-bottom-color: black">
                    <li class="nav-item">
                        <a class="nav-link active bg-black text-white fw-bold wd-font" href="../for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-gray wd-font" href="../trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-gray wd-font" href="../covid-19.html">COVID-19</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-gray wd-font" href="../news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-gray wd-font d-none d-md-block" href="../sports.html">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-gray d-none d-lg-block" href="../entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>
           <div class="container position-relative ps-0 pe-0">
                <img width="100%" heigh="500px" src="../images/SpaceX_Starship.jpg">
                <div class="wd-bottom-left text-white">SpaceX's Starship</div>
            </div>
           ${PostSummaryList()}
        </div>
    `);
}
export default ExploreComponent;
