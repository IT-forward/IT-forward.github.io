import { Row, Col } from "react-bootstrap";
import EmphasisedInfoRow from "../emphasisedInfoRow/EmphasisedInfoRow";

function EmphasisedInfo(props: any) {
  const emphasisedInfo = props.emphasisedInfo;
  let row = [];

  for (const emphasis in emphasisedInfo) {
    row.push(
      <Col className="acc-info">
        <EmphasisedInfoRow
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

export default EmphasisedInfo;
