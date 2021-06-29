import { Row, Col } from "react-bootstrap";
import SeparatedInfoRow from "../separatedInfoRow/SeparatedInfoRow";

type SeparatedInfoType = {}[];

function SeparatedInfo(props: any) {
  const separatedInfo = props.separatedInfo;
  let row: any = [];

  separatedInfo.forEach((el: any) => {
    for (const prop in el) {
      row.push(
        <Col className="acc-info">
          <SeparatedInfoRow
            prop={prop}
            value={el[prop]}
          />
        </Col>
      );
    }
  });

  // for (const emphasis in emphasisedInfo) {
  //   row.push(
  //     <Col className="acc-info">
  //       <SeparatedInfoRow
  //         emphasis={emphasis}
  //         value={emphasisedInfo[emphasis]}
  //       />
  //     </Col>
  //   );
  // }
  return (
    <Row xs={1} lg={2}>
      {row}
    </Row>
  );
}

export default SeparatedInfo;
