import React, { useEffect, useState } from "react";
import Math from "./Math";
import NetworkSignal from "./NetworkSignal";
import SidebarMath from "./SidebarMath";
import SideBarNetworkSignal from "./SideBarNetworkSignal";







const VideoLec = () => {



const [show,setShow]=useState(false);

const onScroll=()=>{
  if(window.scrollY>330){
    setShow(true)
  }else{
    setShow(false)
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}



useEffect(()=>{
  window.addEventListener("scroll",onScroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
  return(()=>{
    window.removeEventListener("scroll",onScroll)
  })
},[])


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
            {show && <button onClick={topFunction} className="topbtn" type="button"><i className="fa fa-arrow-circle-o-up"></i></button> }
        </div>
      </div>
    </>
  );
};
export default VideoLec;
