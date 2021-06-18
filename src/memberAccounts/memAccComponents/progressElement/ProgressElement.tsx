import './ProgressElement.css';
import { ProgressBar } from "react-bootstrap";

function ProgressElement(props: any) {
  const skill = props.skill;
  const level = props.level;
  const percent = props.percent;

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="skill-name font-weight-bold">{skill}</div>
        <div>{level}</div>
      </div>
      <ProgressBar now={percent} variant={"red-bar"} className="progress-thiner" />
    </div>
  );
}

export default ProgressElement;
