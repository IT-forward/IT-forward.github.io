import { memo } from "react";
import { Handle, Position } from "react-flow-renderer";
import bahriddin from './images/bahriddin.png';
import "../OrgChart.css";

export default memo(() => {
  return (
    <div className={"branch-box"}>
      <div>
        <img className={"image"} src={bahriddin} alt={"bahriddin"} />
      </div>
      <div>{"Bahriddin Abdiev"}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
});
