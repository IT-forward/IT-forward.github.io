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

function Facts(props: FactsType) {
  const facts = props.factsInfo;
  const row: any = []; // what is row's type now?

  facts.forEach((fact, index) => {
    const icon = fact.icon;
    const numbers = fact.numbers;
    const type = fact.type;

    row.push(
      <Col className="text-center py-3 student-border" id={`student-${index}`}>
        <Fact icon={icon} nums={numbers} type={type} />
      </Col>
    );
  });

  return (
    <Row xs={1} md={3} id="students">
      {row}
    </Row>
  );
}

export default Facts;
