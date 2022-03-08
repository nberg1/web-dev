import React from "react";
import './index.css';
const Classes = () => {
    const color = 'blue';
    const dangerous1 = false;
    const dangerous2 = true;


    return(
        <div>
            <h2>Classes</h2>
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                Dynamic Blue background</div>
            <div className={`${dangerous1 ? 'wd-bg-red' : 'wd-bg-green'}
                wd-fg-black wd-padding-10px`}>
                Dangerous background False</div>
            <div className={`${dangerous2 ? 'wd-bg-red' : 'wd-bg-green'}
                wd-fg-black wd-padding-10px`}>
                Dangerous background True</div>
            <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
                Yellow background</div>
            <div className="wd-bg-blue wd-fg-black wd-padding-10px">
                Blue background</div>
            <div className="wd-bg-red wd-fg-black wd-padding-10px">
                Red background</div>
        </div>
    )
};
export default Classes;
