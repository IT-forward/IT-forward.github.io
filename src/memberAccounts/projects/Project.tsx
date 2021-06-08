import project1Img from './projectImages/project1.png';
import './Project.css';

function Project() {
    return (
        <a href="https://light-switch-00.netlify.app/" target="_blank" className="project">
            <div><img src={project1Img} alt="project 1" className="img-fluid" /></div>
            <div className="project-title-div">
                <div className="project-title text-center">Light Switch</div>
            </div>
        </a>
    );
}

export default Project;