import ProgressElement from "../progressElement/ProgressElement";
import { Row, Col } from "react-bootstrap";

type ProgressType = {
  skillsInfo: Array<SkillType>;
};
type SkillType = {
  name: string;
  level: string;
  percent: number;
};

function Progress({skillsInfo}: ProgressType) {
  let row: JSX.Element[] = [];

  skillsInfo.forEach(({name, level, percent}, id) => {
    row.push(
      <Col className="my-1" key={id} >
        <ProgressElement skill={name} level={level} percent={percent} />
      </Col>
    );
  });

  return (
    <div data-testid="progress-div">
      <Row xs={1} md={2} id="skills">
        {row}
      </Row>
    </div>
  );
}

export default Progress;
