import React from "react";
import MathData from "../../dataFiles/videoLec/MathLec.json";

const SidebarMath = () => {

    const chgDisplay=()=>{
        const topicDiv=document.getElementsByClassName("mathSidebarTopicLec")
        console.log(topicDiv)
        topicDiv.style.display="block"
    }
  return (
    <>
      <div className="mathSidebarMainDiv">
        <p>Math</p>
        {MathData.map((val) => {
          return (
            <div className="mathSidebarTopicDiv">
              <div className="mathSidebarTopicName">
                <p>
                    {val.topic} <i onClick={chgDisplay} className="fa fa-chevron-circle-down"></i>
                </p>
              </div>
                {val.title.map((value)=>{
                    return(
                        <div className="mathSidebarTopicLec">
                            <p>
                            {value.length>20?value.slice(0,30):value}...
                            </p>
                        </div>

                    )
                })}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default SidebarMath;
