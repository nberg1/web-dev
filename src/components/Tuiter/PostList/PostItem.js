import React from "react";
import "../Styles/explore.css"
import "../Styles/index.css"

const PostItem = (
    {
      postContent = {
          User: 'Elon Musk',
          userName: 'elonmusk',
          time: '23h',
          title: 'Amazing show about @Inspiration4x mission!',
          UserImage: '/images/elon_rocket.jpg',
          ArticleImage: '/images/countdown_inspiration4.jfif',
          ArticleTitle: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
          ArticleSummary: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...',
          ArticleUrl: 'netflix.com',
          Reply: '4.2K',
          ReTuit: '3.5K',
          Like: '27.5K'
      }
  }) => {
    return(
        <>
           <div className="d-flex flex-row overflow-hidden wd-font wd-border-bottom wd-font-13">
               <div className="float-start ms-3 mt-3">
                   <img className="rounded-circle" width="48px" height="48px" src={postContent.UserImage}/>
               </div>
               <div className="float-end mt-3 ms-3 wd-font-15 wd-font-color-gray me-3">
                   <span className="wd-font-color-white">{postContent.User}</span>
                   <img className="wd-tuit-emoji" src="/images/Twitter_Verified_Badge.svg.png"/>
                   <span>@{postContent.userName} · {postContent.time}</span>
                   <div className="wd-font-color-white" style={{maxWidth: "506px"}}>{postContent.title}</div>
                   <div className="mt-2 border-1">
                       <div className="wd-border-style rounded-3 overflow-hidden" style={{marginRight: "48px"}}>
                           <img className="wd-article-image" width="504px" height="264px" style={{maxWidth: "100%", height: "100%"}} src={postContent.ArticleImage}/>
                           <div className="p-2">
                               <div className="wd-font-color-white" style={{maxWidth: "506px"}}>{postContent.ArticleTitle ? postContent.ArticleTitle : ''}</div>
                               <div style={{maxWidth: "506px"}}>{postContent.ArticleSummary ? postContent.ArticleSummary : ''}</div>
                               <div>{postContent.ArticleUrl ? postContent.ArticleUrl : ''}</div>
                           </div>
                       </div>
                       <div className="d-flex justify-content-between overflow-visible mt-3 pb-3 pe-4 me-4">
                           <div>
                               <a href="#" className="wd-nav-tabs-no-underline wd-font-color-gray">
                                   <div>
                                       <i className="fas fa-comment me-2"/>
                                       <span className="wd-font-13">{postContent.Reply ? postContent.Reply : ''}</span>
                                   </div>
                               </a>
                           </div>
                           <div style={{maxWidth: "506px"}}>
                               <a href="#" className="wd-nav-tabs-no-underline wd-font-color-gray">
                                   <div className="wd-retuit-icon-hover">
                                       <i className="fas fa-retweet me-2"></i>
                                       <span className="wd-font-13">{postContent.ReTuit ? postContent.ReTuit : ''}</span>
                                   </div>
                               </a>
                           </div>
                           <div>
                               <a href="#" className="wd-nav-tabs-no-underline wd-font-color-gray">
                                   <div>
                                       <i className="fas fa-heart me-2"/>
                                       <span className="wd-font-13">{postContent.Like ? postContent.Like : ''}</span>
                                   </div>
                               </a>
                           </div>
                           <div>
                               <a href="#" className="wd-nav-tabs-no-underline wd-font-color-gray">
                                   <div>
                                       <i className="fas fa-share"></i>
                                   </div>
                               </a>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </>
    );
}
export default PostItem;