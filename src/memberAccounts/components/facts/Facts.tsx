import "./Facts.css";
import { Row, Col } from "react-bootstrap";
import Fact from "../fact/Fact";

type FactsType = {
  factsInfo: Array<FactType>;
}
type FactType = {
  icon: JSX.Element;
  numbers: string;
  type: string;
};

function Facts({factsInfo}: FactsType) {
  const row: JSX.Element[] = []; 

  factsInfo.forEach(({icon, numbers, type}, index) => {
    row.push(
      <Col className="text-center py-3 student-border" id={`student-${index}`} key={index} >
        <Fact icon={icon} nums={numbers} type={type} />
      </Col>
    );
  });

  return (
    <Row xs={1} md={3} id="students" data-testid='facts'>
      {row}
    </Row>
  );
}

export default Facts;
