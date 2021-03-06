import "../Roadmap/Roadmap.css";
import Chapter from "./components/Chapter";
import RoadmapRow from "./components/RoadmapRow";
import Lesson from "./components/Lesson";


import { roadmapData } from "./data";

function Roadmap() {
  return (
    <div id="body">
      <h2 className="roadmap-name">
        <span>Pay IT Forward</span> jamoasining dasturlashni o'rganish xaritasi
      </h2>
      {roadmapData.map((chapter) => {
        return (
          <div>
            <Chapter iconComponent={chapter.iconComponent} />
            {chapter.children.map((roadmapRow) => (
              <RoadmapRow>
                {roadmapRow.map((lesson) => (
                  <Lesson
                    title={lesson.title}
                    icon={lesson.iconComponent}
                  />
                ))}
              </RoadmapRow>
            ))}
          </div>
        );
      })}
  
    </div>
  );
}

export default Roadmap;
