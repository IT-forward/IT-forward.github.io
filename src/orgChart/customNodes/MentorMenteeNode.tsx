import { memo } from "react";
import { Handle, Position } from "react-flow-renderer";
import { Link } from "react-router-dom";

export default memo(
  ({ id, data }: { id: string; data: { fullName: string; image: string } }) => {
    return (
      <Link to={{ pathname: `/member-account/${id}` }}>
        <div className={"branch-box"}>
          <div>
            <img className={"image"} src={data.image} alt={data.fullName} />
          </div>
          <div>{data.fullName}</div>
          <Handle type="target" position={Position.Top} />
          <Handle type="source" position={Position.Bottom} />
        </div>
      </Link>
    );
  }
);
