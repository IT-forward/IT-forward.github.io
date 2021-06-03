import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";
import husan from "./images/husan.png";
import "../OrgChart.css";

export default memo(() => {
  return (
    <div className={"branch-box"}>
      <div>
        <img className={"image"} src={husan} alt={"husan"} />
      </div>
      <div>{'Husan Eshonqulov'}</div>
      <Handle type="target" position={Position.Top} />
    </div>
  );
});
