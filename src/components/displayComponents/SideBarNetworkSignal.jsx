import Accordian from "./Accordian";
import NaData from "../../dataFiles/videoLec/Network_signals_andSystems.json";

const SideBarNetworkSignal = () => {
  return (
    <>
      <div className="mathSideBarMainDiv">
        <div className="mathSidebarSubDiv">
          <p>Network Analysis, Signals and Systems</p>
          {NaData.map((val,index) => {
            return <Accordian key={index} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
export default SideBarNetworkSignal;
