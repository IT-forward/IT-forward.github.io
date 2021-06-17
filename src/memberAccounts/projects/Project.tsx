import project1Img from "./projectImages/project1.png";
import "./Project.css";

function Project() {
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
          href="https://rock-paper-scissors-game-00.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Ko'rish
        </a>
        <a
          className="btn btn-light ml-2"
          href="https://github.com/Husan-Eshonqulov/rock-paper-scissors"
          target="_blank"
          rel="noreferrer"
        >
          Manzil
        </a>
      </div>
      <div className="project-title-div">
        <div className="project-title text-center">
          Rock Paper Scissors game
        </div>
      </div>
    </div>
  );
}

export default Project;
