import "./Header.css";
import { Row, Col } from "react-bootstrap";
import SeparatedInfo from "../separatedInfo/SeparatedInfo";

type HeaderType = {
  fullName: string;
  profession: string;
  summary: string;
  separated: SeparatedType;
  about: string;
  image: string;
};

type SeparatedType = {
  City: string;
  Phone: string;
  Email: string;
  Degree: string;
  Freelance: string;
  Website: string;
};

function Header({
  fullName,
  profession,
  summary,
  about,
  separated,
  image,
}: HeaderType) {
  
  return (
    <div>
      <Row id="acc-header">
        <Col
          sm={12}
          md="auto"
          lg="auto"
          className="d-flex justify-content-center w-330 mt-1"
        >
          <img src={image} alt={fullName} className="img-fluid" />
        </Col>
        <Col sm={12} md={6} lg={7} className="w-330">
          <h1 className="text-center text-md-left">{fullName}</h1>
          <h3 className="text-center text-md-left">{profession}</h3>
          <p>{summary}</p>
          <div className="my-2">
            <SeparatedInfo emphasisedInfo={separated} />
          </div>
          <p className="d-md-none d-lg-block">{about}</p>
        </Col>
        <Col className="d-none d-md-block d-lg-none my-2">
          <p>{about}</p>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
