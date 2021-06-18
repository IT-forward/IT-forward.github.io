import "./Project.css";
import project1Img from "../../projectImages/project1.png";

function Project(props: any) {
  const name = props.projectName;
  const image = props.projectImg;
  const deployPath = props.deployPath;
  const sourcePath = props.sourcePath;

  return (
    <div className="project">
      <div>
        <div className="img-div">
          <img src={project1Img} alt="project 1" className="img-fluid" />
        </div>
      </div>

      <div className="project-middle">
        <a
          className="btn btn-light mr-2"
          href={deployPath}
          target="_blank"
          rel="noreferrer"
        >
          Ko'rish
        </a>
        <a
          className="btn btn-light ml-2"
          href={sourcePath}
          target="_blank"
          rel="noreferrer"
        >
          Manzil
        </a>
      </div>
      <div className="project-title-div">
        <div className="project-title text-center">{name}</div>
      </div>
    </div>
  );
}

export default Project;
