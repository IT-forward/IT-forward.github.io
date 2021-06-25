import { Row, Col } from "react-bootstrap";
import Project from "../project/Project";

type ProjectsType = {
  projectsInfo: Array<ProjectType>;
};
type ProjectType = {
  name: string;
  image: string;
  deployPath: string;
  sourcePath: string;
};

function Projects({projectsInfo}: ProjectsType) {
  let row: any = [];

  projectsInfo.forEach(({name, image, deployPath, sourcePath}) => {
    row.push(
      <Col className="mb-4">
        <Project
          name={name}
          image={image}
          deployPath={deployPath}
          sourcePath={sourcePath}
        />
      </Col>
    );
  });

  return (
    <Row xs={1} md={2} lg={3}>
      {row}
    </Row>
  );
}

export default Projects;
