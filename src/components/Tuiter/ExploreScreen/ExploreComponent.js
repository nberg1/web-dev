import React from "react";
import PostSummaryList from "../PostSummaryList";
import "../Styles/explore.css"
import "../Styles/index.css"

const ExploreComponent = () => {
    return(
        <>
            <div className="container-fluid border-1 p-0">
                <div className="wd-overflow-hidden wd-border-style">
                    <i className="fa fa-search"></i>
                    <input type="text" className="wd-search-field wd-rounded-edges wd-font"
                           placeholder="Search Tuiter"
                           style={{backgroundColor: "#2c2b2b",
                        padding: "10px",
                        width: "calc(100% - 40px)",
                        marginBottom: "10px",
                        borderColor: "black",
                        borderRadius: "50px",
                        color: "rgb(110, 118, 125)"}}/>
                    <ul className="nav nav-tabs text-dark nav-fill">
                        <li className="nav-item">
                            <a className="nav-link active bg-black text-white fw-bold wd-font" href="#">For
                                you</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wd-gray wd-font" href="../trending.html">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wd-gray wd-font" href="../covid-19.html">COVID-19</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wd-gray wd-font" href="../news.html">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wd-gray wd-font d-none d-md-block" href="../sports.html">Sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wd-gray d-none d-lg-block"
                               href="../entertainment.html">Entertainment</a>
                        </li>
                    </ul>
                </div>
                <div className="container position-relative ps-0 pe-0">
                    <img width="100%" heigh="500px" src="images/SpaceX_Starship.jpg"/>
                        <div className="wd-bottom-left text-white">SpaceX's Starship</div>
                </div>
                <PostSummaryList/>
            </div>
        </>
    );
}
export default ExploreComponent;
