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

function Progress(props: ProgressType) {
  const skills = props.skillsInfo;
  let row: any = [];

  skills.forEach((skill) => {
    const name = skill.name;
    const level = skill.level;
    const percent = skill.percent;

    row.push(
      <Col className="my-1">
        <ProgressElement skill={name} level={level} percent={percent} />
      </Col>
    );
  });

  return (
    <div>
      <Row xs={1} md={2} id="skills">
        {row}
      </Row>
    </div>
  );
}

export default Progress;
