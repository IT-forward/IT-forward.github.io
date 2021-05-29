import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import oybek from "./images/oybek.png";
import "../OrgChart.css";

export default memo(() => {
  return (
    <div className={"branch-box"}>
      <div>
        <img className={"image"} src={oybek} alt={"oybek"} />
      </div>
      <div>{"Oybek Turaev"}</div>
      <Handle type="target" position="top" />
    </div>
  );
});
