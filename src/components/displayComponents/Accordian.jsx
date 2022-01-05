import React, { useState } from "react";

const Accordian = ({index, topic, title }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <div className="SideBarTopicTitle">
          <p>
            {topic}
            <i onClick={()=>{setShow(!show)}} className="fa fa-arrow-circle-down"></i>
          </p>
        </div>
        {show &&
          title.map((value,ind) => {
            return (
              <div key={ind} className="SideBarTopicName">
                <a href={`#${index}${ind}`}>{value.length>20?value.slice(0,32):value}..</a>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Accordian;
