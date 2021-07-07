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
  let row: JSX.Element[] = [];

  projectsInfo.forEach(({name, image, deployPath, sourcePath}, id) => {
    row.push(
      <Col className="mb-4" key={id} >
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
    <Row xs={1} md={2} lg={3} data-testid='projects'>
      {row}
    </Row>
  );
}

export default Projects;
