import "./Project.css";
import {MdLink} from 'react-icons/md';
import {RiGithubFill} from 'react-icons/ri';

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
          className="mr-3"
          href={deployPath}
          target="_blank"
          rel="noreferrer"
        >
          <MdLink size="40px" color="#fff" />
        </a>
        <a
          className="ml-3"
          href={sourcePath}
          target="_blank"
          rel="noreferrer"
        >
          <RiGithubFill size="40px" color="#fff" />
        </a>
      </div>
      <div className="project-title-div">
        <div className="project-title text-center">{name}</div>
      </div>
    </div>
  );
}

export default Project;
