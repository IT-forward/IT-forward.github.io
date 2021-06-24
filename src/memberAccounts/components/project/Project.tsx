import "./Project.css";

type ProjectType = {
  name: string,
  image: string,
  deployPath: string,
  sourcePath: string,
}

function Project(props: ProjectType) {
  const name = props.name;
  const image = props.image;
  const deployPath = props.deployPath;
  const sourcePath = props.sourcePath;

  return (
    <div className="project">
      <div>
        <div className="img-div">
          <img src={image} alt="project 1" className="img-fluid" />
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
