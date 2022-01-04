import React from "react";
import Math from "./Math";
import NetworkSignal from "./NetworkSignal";
import SidebarMath from "../displayComponents/SidebarMath";
const VideoLec = () => {
  return (
    <>
      <div className="lecMainDiv">
        <div className="lecSubBar">
          <p>Sub1</p>
          <p>Sub2</p>
          <p>Sub3</p>
          <p>Sub4</p>
          <button>Search</button>
          <input type="text"></input>
        </div>
        <div className="lecMainContentDiv">
          <div className="lecSideBarDiv">
            <div className="lecSidebarTitle">Topics</div>
              <SidebarMath/>
          </div>
          <div className="lecVideoDiv"> 
              <div className="lecVideoDivTitle">
                  Lets Get Started..
              </div>
              <Math/>
              <NetworkSignal/>
          </div>
        </div>
      </div>
    </>
  );
};
export default VideoLec;
