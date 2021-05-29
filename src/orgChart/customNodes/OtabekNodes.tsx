import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import otabek from "./images/otabek.png";
import "../OrgChart.css";

export default memo(() => {
  return (
    <div className={"branch-box"}>
      <div>
        <img className={"image"} src={otabek} alt={"otabek"} />
      </div>
      <div>{"Otabek Kadirov"}</div>
      <Handle type="target" position="top" />
    </div>
  );
});
