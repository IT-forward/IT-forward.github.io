import project1Img from './projectImages/project1.png';
import './Project.css';

function Project() {
    return (
        <div className="project">
            <img src={project1Img} alt="project 1" className="img-fluid" />
            <div className="project-middle">
                <button>Ko'rish</button>
                <button>Manzil</button>
            </div>
            <div className="project-title-div">
                <div className="project-title text-center">Rock Paper Scissors game</div>
            </div>
        </div>
    );
}

export default Project;