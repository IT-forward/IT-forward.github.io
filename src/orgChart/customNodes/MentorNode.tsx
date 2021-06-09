import { memo } from "react";
import { Handle, Position } from "react-flow-renderer";

export default memo(
  ({ data }: { data: { fullName: string; image: string } }) => {
    return (
      <div className={"branch-box"}>
        <div>
          <img className={"image"} src={data.image} alt={data.fullName} />
        </div>
        <div>{data.fullName}</div>
        <Handle type="source" position={Position.Bottom} />
      </div>
    );
  }
);
