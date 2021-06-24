import { Row, Col } from "react-bootstrap";
import SeparatedInfoRow from "../separatedInfoRow/SeparatedInfoRow";

function SeparatedInfo(props: any) {
  const emphasisedInfo = props.emphasisedInfo;
  let row = [];

  for (const emphasis in emphasisedInfo) {
    row.push(
      <Col className="acc-info">
        <SeparatedInfoRow
          emphasis={emphasis}
          value={emphasisedInfo[emphasis]}
        />
      </Col>
    );
  }
  return (
    <Row xs={1} lg={2}>
      {row}
    </Row>
  );
}

export default SeparatedInfo;
