import "./ProgressElement.css";
import { ProgressBar } from "react-bootstrap";

type ProgressElementType = {
  skill: string,
  level: string,
  percent: number,
}

function ProgressElement({skill, level, percent}: ProgressElementType) {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="skill-name font-weight-bold">{skill}</div>
        <div>{level}</div>
      </div>
      <ProgressBar
        now={percent}
        variant={"red-bar"}
        className="progress-thiner"
      />
    </div>
  );
}

export default ProgressElement;
