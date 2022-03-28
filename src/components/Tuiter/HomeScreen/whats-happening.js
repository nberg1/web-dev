import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            postContent: whatsHappening});
    }
    return (
        <div>
            <div className="d-flex flex-row overflow-hidden wd-font wd-font-13 mb-1" >
                <div className="float-start ms-3 mt-3">
                    <img className="rounded-circle" width="48px" height="48px" src="/images/nicole_berg_image.jpg"/>
                </div>
                <div className="float-end mt-3 ms-3 me-0 wd-font-color-gray me-3">
                    <input className="wd-font mb-3 wd-border-bottom" style={{
                        backgroundColor: "black",
                        color: "white",
                        borderColor: "black",
                        fontSize: "20px",
                        outline: "none",
                        flexGrow: "1",
                        width: "400px"}}
                           value={whatsHappening}
                           placeholder="What's Happening?"
                           onChange={(event) =>
                               setWhatsHappening(event.target.value)}>
                    </input>
                    <div className="mt-3 wd-border-bottom"></div>
                </div>
            </div>
            <div className="ms-5 mb-4 pb-2">
                <div className="ps-4 mt-3">
                    <a className="d-inline-flex align-items-center"><i className="float-start fa fa-image fa-1x wd-font-color-blue me-3"></i></a>
                    <a className="d-inline-flex align-items-center"><i className="float-start fa fa-chart-simple fa-1x wd-font-color-blue me-3"></i></a>
                    <a className="d-inline-flex align-items-center"><i className="fa fa-smile fa-1x wd-font-color-blue me-3"></i></a>
                    <a className="d-inline-flex align-items-center"><i className="float-start fa fa-calendar fa-1x wd-font-color-blue me-3"></i></a>
                    <button type="button" className="wd-tuit-button text-white float-end rounded-pill btn-primary btn-block text-white p-2 ps-3 pe-3"  onClick={tuitClickHandler}>
                        Tuit</button>
                </div>
            </div>
        </div>
    );
}
export default WhatsHappening;