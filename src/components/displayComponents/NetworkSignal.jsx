import React from "react";
import ytIcon from "../../images/youtube.png";
import Na_SsData from "../../dataFiles/videoLec/Network_signals_andSystems.json";

const NetworkSignal = () => {
  return (
    <>
      <div className="lecMathDiv">
        <p id="Na">Network Analysis Signals and System</p>
        {Na_SsData.map((val, ind) => {
          return (
            <div key={ind}>
              <div className="lecSubTopicName">{val.topic}</div>
              {val.lec.map((value,index)=>{
                  return(

                <div key={index} className="lecVideoLink">
                <div className="lecVideoIcon">
                  <img src={ytIcon} alt="youtube"></img>
                </div>
                <div className="lecVideoTitle">
                  <a target='_blank' rel="noreferrer noopener" href={`${value}`}>{`${val.title[index]}`}</a>
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
export default NetworkSignal;
