import Accordian from "./Accordian";
import MathData from "../../dataFiles/videoLec/MathLec.json";

const SidebarMath = () => {
  return (
    <>
      <div className="mathSideBarMainDiv">
        <div className="mathSidebarSubDiv">
          <p>Math</p>
          {MathData.map((val,index) => {
            return <Accordian key={index} {...val} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};
export default SidebarMath;
