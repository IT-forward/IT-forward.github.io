import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";
import eldor from './images/eldor.png';
import "../OrgChart.css";

export default memo(() => {
  return (
    <div className={"branch-box"}>
      <div>
        <img className={"image"} src={eldor} alt={"eldor"} />
      </div>
      <div>{"Eldor Ergashov"}</div>
      <Handle type="target" position={Position.Top} />
    </div>
  );
});
