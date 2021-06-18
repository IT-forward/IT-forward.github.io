import "./MemAccount.css";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./memAccComponents/header/Header";
import NumOfStudents from "./memAccComponents/numOfStudents/NumOfStudents";

import StudentInfo from "./memAccComponents/studentInfo/StudentInfo";

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

  return (
    <div id="account">
      <Container>
        <div className="mt-2">
          <Header headerInfo={headerInfo} />
        </div>
        <div className="my-4" id="mem-student-div" >
          <NumOfStudents studentsInfo={studentsInfo} />
        </div>
      </Container>
    </div>
  );
}

export default MemAccount;
