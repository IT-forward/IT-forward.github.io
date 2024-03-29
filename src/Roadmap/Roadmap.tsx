import "../Roadmap/Roadmap.css";
import Chapter from "./components/Chapter";
import RoadmapRow from "./components/RoadmapRow";
import Lesson from "./components/Lesson";
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';
import { roadmapData } from "./data";
import { Link } from 'react-router-dom';


function Roadmap() {
  return (
    <div>

    <Navbar />
    <div id="road-map">
      <h2 className="roadmap-name">
        <span>Pay IT Forward</span> jamoasining dasturlashni o'rganish xaritasi
      </h2>
      {roadmapData.map((chapter) => {

        return (
          <div>
            <Chapter iconComponent={chapter.iconComponent} />
            {chapter.children.map((roadmapRow) => (
              <RoadmapRow>
                  <Link to={{pathname: `/lessons/${roadmapRow.path}` }}>
                  <Lesson
                    title={roadmapRow.title}
                    icon={roadmapRow.iconComponent}
                  />
                   </Link>
              </RoadmapRow>
            ))}
          </div>
        );
      })}
    </div>
    <Footer />
    </div>
  );
}

export default Roadmap;
