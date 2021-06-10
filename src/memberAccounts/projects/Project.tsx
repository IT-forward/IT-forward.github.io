import project1Img from './projectImages/project1.png';
import './Project.css';

function Project() {
    return (
        <div className="project">
            <a href="https://light-switch-00.netlify.app/" target="_blank" className="anchor">
                <div><img src={project1Img} alt="project 1" className="img-fluid" /></div>
                <div className="project-title-div">
                    <div className="project-title text-center">Light Switch</div>
                </div>
            </a>
        </div>
    );
}

export default Project;