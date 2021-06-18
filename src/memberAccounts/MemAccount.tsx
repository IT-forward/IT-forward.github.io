import "./MemAccount.css";
import { Container } from "react-bootstrap";
import Header from "./memAccComponents/header/Header";
import NumOfStudents from "./memAccComponents/numOfStudents/NumOfStudents";
import SectionCaption from "./memAccComponents/sectionCaption/SectionCaption";
import Progress from "./memAccComponents/progress/Progress";
import Projects from "./memAccComponents/projects/Projects";
import Testimonials from "./memAccComponents/testimonials/Testimonials";

function MemAccount(props: any) {
  const headerInfo = {
    memberFullName: props.memberInfo.memberFullName,
    memberProfession: props.memberInfo.memberProfession,
    about: props.memberInfo.about,
    emphasisedInfo: props.memberInfo.emphasisedInfo,
    extraInfo: props.memberInfo.extraInfo,
    memberImage: props.memberInfo.memberImage,
  };
  const studentsInfo = props.memberInfo.students;
  const skillsInfo = props.memberInfo.skills;
  const projectsInfo = props.memberInfo.projects;
  const testimonialsInfo = props.memberInfo.testimonials;

  return (
    <div id="account">
      <Container>
        <div className="mt-2">
          <Header headerInfo={headerInfo} />
        </div>
        <div className="mb-4" id="mem-student-div">
          <NumOfStudents studentsInfo={studentsInfo} />
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
