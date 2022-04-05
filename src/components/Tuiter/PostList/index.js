import React, {useEffect, useState} from "react";
import PostItem from "./PostItem";
import "../Styles/explore.css"
import "../Styles/index.css"
import {useDispatch, useSelector} from "react-redux";
import {createTuit, deleteTuit, findAllTuits} from "../actions/tuits-actions";

const PostList = () => {
    const postContent = useSelector(
        state => state.postContent);
    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch), []);
    const [newTuit, setNewTuit] = useState({title: 'New tuit', Like: 0, Dislike: 0,
        UserImage: "/images/nicole_berg_image.jpg", userName: "nicole", User: "Nicole Berg"});

    return(
            <div className="container wd-border-style border-bottom-1 ps-0 pe-0 text-white">

                <div>
                    <div className="d-flex flex-row overflow-hidden wd-font wd-font-13 mb-1" >
                        <div className="float-start ms-3 mt-3">
                            <img className="rounded-circle" width="48px" height="48px" src="/images/nicole_berg_image.jpg"/>
                        </div>
                        <div className="float-end mt-3 ms-3 me-0 wd-font-color-gray me-3">
                    <textarea className="wd-font mb-3 wd-border-bottom" wrap="hard" style={{
                        backgroundColor: "black",
                        color: "white",
                        borderColor: "black",
                        fontSize: "20px",
                        outline: "none",
                        flexGrow: "1",
                        width: "450px", maxWidth: "100%"}}
                              placeholder="What's Happening?"
                              onChange={(e) =>
                                  setNewTuit({...newTuit,
                                      title: e.target.value})}>
                    </textarea>
                            <div className="mt-3 wd-border-bottom" style={{width: "450px", maxWidth: "100%"}}></div>
                        </div>
                    </div>
                    <div className="ms-5 mb-4 pb-2">
                        <div className="ps-4 mt-3">
                            <a className="d-inline-flex align-items-center"><i className="float-start fa fa-image fa-1x wd-font-color-blue me-3"></i></a>
                            <a className="d-inline-flex align-items-center"><i className="float-start fa fa-chart-simple fa-1x wd-font-color-blue me-3"></i></a>
                            <a className="d-inline-flex align-items-center"><i className="fa fa-smile fa-1x wd-font-color-blue me-3"></i></a>
                            <a className="d-inline-flex align-items-center"><i className="float-start fa fa-calendar fa-1x wd-font-color-blue me-3"></i></a>
                            <button type="button" className="wd-tuit-button text-white float-end rounded-pill btn-primary btn-block text-white p-2 ps-3 pe-3"
                                    onClick={() =>
                                createTuit(dispatch, newTuit)}>
                                Tuit</button>
                        </div>
                    </div>
                </div>
                <ul className="list-group">
                    {
                        postContent.map && postContent.map(postContent =>
                        <PostItem key={postContent._id}
                        postContent={postContent}/>)
                    }
                </ul>
            </div>
    );
}
export default PostList;