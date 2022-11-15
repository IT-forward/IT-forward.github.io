import { Row, Col } from "react-bootstrap";
import SeparatedInfoRow from "../separatedInfoRow/SeparatedInfoRow";

type SeparatedInfoType = {
  separatedInfo: {[prop: string]: string}[],
};

function SeparatedInfo({separatedInfo}: SeparatedInfoType) {
  let row: any = [];

  separatedInfo.forEach((el: {[prop: string]: string}, id) => {
    for (const prop in el) {
      row.push(
        <Col className="acc-info" key={id}>
          <SeparatedInfoRow
            prop={prop}
            value={el[prop]}
          />
        </Col>
      );
    }
  });

  return (
    <Row xs={1} lg={2}>
      {row}
    </Row>
  );
}

export default SeparatedInfo;
