import { Row, Col } from "react-bootstrap";
import Project from "../project/Project";

function Projects(props: any) {
  const projects = props.projectsInfo;
  let row = [];

  for (const property in projects) {
    const projectName = projects[property].projectName;
    const projectImg = projects[property].projectImg;
    const deployPath = projects[property].deployPath;
    const sourcePath = projects[property].sourcePath;
    row.push(
      <Col className="mb-4">
        <Project
          projectName={projectName}
          projectImg={projectImg}
          deployPath={deployPath}
          sourcePath={sourcePath}
        />
      </Col>
    );
  }

  return (
    <Row xs={1} md={2} lg={3}>
      {row}
    </Row>
  );
}

export default Projects;
