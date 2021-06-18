import "./NumOfStudents.css";
import { Row, Col } from "react-bootstrap";
import StudentInfo from "../studentInfo/StudentInfo";

function NumOfStudents(props: any) {
  const studentsInfo = props.studentsInfo;
  const students = [];
  let id = 0;

  for (const property in studentsInfo) {
    const icon = studentsInfo[property].icon;
    const numbers = studentsInfo[property].numbers;
    const name = studentsInfo[property].name;

    students.push(
      <Col className="text-center py-3 student-border" id={`student-${id}`}>
        <StudentInfo icon={icon} nums={numbers} name={name} />
      </Col>
    );

    id++;
  }

  return (
    <Row xs={1} md={3} id="students">
      {students}
    </Row>
  );
}

export default NumOfStudents;
