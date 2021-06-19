import "./Header.css";
import { Row, Col } from "react-bootstrap";
import EphasisedInfo from "../emphasisedInfo/EmphasisedInfo";

function Header(props: any) {
  const memberFullName = props.headerInfo.memberFullName;
  const memberProfession = props.headerInfo.memberProfession;
  const about = props.headerInfo.about;
  const extraInfo = props.headerInfo.extraInfo;
  const emphasisedInfo = props.headerInfo.emphasisedInfo;
  const memberImg = props.headerInfo.memberImage;

  return (
    <div>
      <Row id="acc-header">
        <Col
          sm={12}
          md="auto"
          lg="auto"
          className="d-flex justify-content-center w-330 mt-1"
        >
          <img src={memberImg} alt="Husan" className="img-fluid" />
        </Col>
        <Col sm={12} md={6} lg={7} className="w-330">
          <h1 className="text-center text-md-left">{memberFullName}</h1>
          <h3 className="text-center text-md-left">{memberProfession}</h3>
          <p>{about}</p>
          <div className="my-2">
            <EphasisedInfo emphasisedInfo={emphasisedInfo} />
          </div>
          <p className="d-md-none d-lg-block">{extraInfo}</p>
        </Col>
        <Col className="d-none d-md-block d-lg-none my-2">
          <p>{extraInfo}</p>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
