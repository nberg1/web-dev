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
            <div className="float-start ms-3 mt-3">
                <img className="rounded-circle" width="48px" height="48px" src="/images/nicole_berg_image.jpg"/>
            </div>
            <textarea style={{backgroundColor: "black", color: "white"}}
                      value={whatsHappening}
                      placeholder="What's Happening?"
                      onChange={(event) =>
                          setWhatsHappening(event.target.value)}>
        </textarea>
            <button onClick={tuitClickHandler}>
                Tuit
            </button>
        </div>
    );
}
export default WhatsHappening;