import React from "react";
import ytIcon from "../../images/youtube.png";
import mathData from "../../dataFiles/videoLec/MathLec.json";

const Math = () => {
  return (
    <>
      <div className="lecMathDiv">
        <p>Math</p>
        {mathData.map((val) => {
          return (
            <div>
              <div className="lecSubTopicName">{val.topic}</div>
              {val.lec.map((value,index)=>{
                  return(

                <div className="lecVideoLink">
                <div className="lecVideoIcon">
                  <img src={ytIcon} alt="youtube"></img>
                </div>
                <div className="lecVideoTitle">
                  <a rel="noreferrer noopener" href={`${value}`}>{`${val.title[index]}`}</a>
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
