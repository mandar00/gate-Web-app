import React, { useState } from "react";
import Math from "./Math";
import NetworkSignal from "./NetworkSignal";
import SidebarMath from "./SidebarMath";
import SideBarNetworkSignal from "./SideBarNetworkSignal";
import toTop from "../../images/top.png"







const VideoLec = () => {


const [show,setShow]=useState(false);

const onScroll=()=>{
  console.log(window.scrollY)
}

window.addEventListener("scroll",onScroll)
  return (
    <>
      <div onScroll={onScroll} className="lecMainDiv">

        <div className="lecSubBar">
          <a href="#Math">Math</a>
          <a href="#Na">NA ,SS</a>
          <a href="a">Sub3</a>
          <a href="a">Sub4</a>
         
        </div>
        <div className="lecMainContentDiv">
          <div className="lecSideBarDiv">
            <div className="lecSidebarTitle">Topics</div>
              <SidebarMath/>
              <SideBarNetworkSignal/>
          </div>
          <div className="lecVideoDiv"> 
              <div id="#top" className="lecVideoDivTitle">
                  Lets Get Started..
              </div>
              <Math/>
              <NetworkSignal/>
          </div>
        </div>
        <div className="goToTop">
            {show && <button className="topbtn" type="button"><img src={toTop} alt="top"  ></img></button> }
        </div>
      </div>
    </>
  );
};
export default VideoLec;
