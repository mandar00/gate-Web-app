import React from "react";
import ytIcon from "../../images/youtube.png";
import mathData from "../../dataFiles/videoLec/MathLec.json";

const Math = () => {
  return (
    <>
      <div className="lecMathDiv">
        <p id="Math">Math</p>
        {mathData.map((val,ind) => {
          return (
            <div key={ind}>
              <div className="lecSubTopicName">{val.topic}</div>
              {val.lec.map((value,index)=>{
                  return(

                <div key={index} className="lecVideoLink">
                <div className="lecVideoIcon">
                  <img src={ytIcon} alt="youtube"></img>
                </div>
                <div id={`${ind}${index}`} className="lecVideoTitle">
                  <a target="_blank" rel="noreferrer noopener" href={`${value}`}>{`${val.title[index]}`}</a>
                </div>
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
export default Math;
