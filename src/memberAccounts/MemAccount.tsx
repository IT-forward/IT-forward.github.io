import "./MemAccount.css";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Facts from "./components/facts/Facts";
import SectionCaption from "./components/sectionCaption/SectionCaption";
import Progress from "./components/progress/Progress";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";

type MemberType = {
  memberInfo: {
    fullName: string;
    profession: string;
    summary: string;
    separated: SeparatedType;
    about: string;
    image: string;
    facts: FactsType;
    skills: SkillsType;
    projects: ProjectsType;
    testimonials: TestimonialsType;
  };
};

type SeparatedType = {
  City: string;
  Phone: string;
  Email: string;
  Degree: string;
  Freelance: string;
  Website: string;
};
type FactsType = Array<FactType>;
type FactType = {
  icon: JSX.Element;
  numbers: string;
  type: string;
};
type SkillsType = Array<SkillType>;
type SkillType = {
  name: string;
  level: string;
  percent: number;
};
type ProjectsType = Array<ProjectType>;
type ProjectType = {
  name: string;
  image: string;
  deployPath: string;
  sourcePath: string;
};
type TestimonialsType = Array<TestimonialType>;
type TestimonialType = {
  name: string;
  profession: string;
  image: string;
  opinion: string;
};

function MemAccount(props: MemberType) {
  const headerInfo = {
    fullName: props.memberInfo.fullName,
    profession: props.memberInfo.profession,
    summary: props.memberInfo.summary,
    separated: props.memberInfo.separated,
    about: props.memberInfo.about,
    image: props.memberInfo.image,
  };
  const factsInfo = props.memberInfo.facts;
  const skillsInfo = props.memberInfo.skills;
  const projectsInfo = props.memberInfo.projects;
  const testimonialsInfo = props.memberInfo.testimonials;

  return (
    <div id="account">
      <Container>
        <div className="mt-2">
          <Header {...headerInfo} />
        </div>
        <div className="mb-4 mt-3" id="mem-student-div">
          <Facts factsInfo={factsInfo} />
        </div>
        <div className="section-div">
          <SectionCaption caption="SKILLS" />
        </div>
        <div>
          <Progress skillsInfo={skillsInfo} />
        </div>
        <div className="section-div">
          <SectionCaption caption="PROJECTS" />
        </div>
        <div>
          <Projects projectsInfo={projectsInfo} />
        </div>
        <div className="section-div">
          <SectionCaption caption="TESTIMONAILS" />
        </div>
        <div>
          <Testimonials testimonialsInfo={testimonialsInfo} />
        </div>
      </Container>
    </div>
  );
}

export default MemAccount;
