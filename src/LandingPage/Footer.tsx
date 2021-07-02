import {Container, Row, Col} from 'react-bootstrap';

function Footer() {
    return (
      <div  style={{background: '#f8f8f8', padding: '25px 0'}} >
        <Container>
          <Row>
            <Col
              sm={12}
              md={3}
              lg={4}
              className="d-flex align-items-center justify-content-center justify-content-md-start"
            >
              <div id="footer-cap" className="font-weight-bolder">
                Pay IT Forward
              </div>
            </Col>
            <Col sm={12} md={9} lg={8}>
              <Row sm={1} md={4} className="justify-content-end text-center">
                <Col md="auto" id="footer-link" className="ml-md-2 ml-lg-4">
                  <a
                    href="https://www.youtube.com/channel/UCV_FW8cXHYEmvWkC0Z-JtSA"
                    target="_blank"
                    rel="noreferrer"
                    id="footer-link-1"
                    className="text-decoration-none"
                  >
                    YouTube
                  </a>
                </Col>
                <Col md="auto" id="footer-link" className="ml-md-2 ml-lg-4">
                  <a
                    href="https://github.com/IT-forward"
                    target="_blank"
                    rel="noreferrer"
                    id="footer-link-2"
                    className="text-decoration-none"
                  >
                    GitHub
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        </div>
    )
}


export default Footer;