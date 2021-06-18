import ProgressElement from "../progressElement/ProgressElement";
import { Row, Col } from "react-bootstrap";

function Progress(props: any) {
  const skills = props.skillsInfo;
  let row = [];

  for (const property in skills) {
    const skill = skills[property].skill;
    const level = skills[property].level;
    const percent = skills[property].percent;

    row.push(
      <Col className="my-1">
        <ProgressElement skill={skill} level={level} percent={percent} />
      </Col>
    );
  }

  return (
    <div>
      <Row xs={1} md={2} id="skills">
        {row}
      </Row>
    </div>
  );
}

export default Progress;
