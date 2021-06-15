import "../LandingPage/LandingPage.css";
import brandLogo from "./LandingPageImages/Logo-full.svg";
import headerImg from "./LandingPageImages/header-image.svg";
import featuresImg from "./LandingPageImages/features-img.svg";
import Telegram from "./smComponents/telegram/Telegram";
import Email from "./smComponents/email/Email";
import Facebook from "./smComponents/facebook/Facebook";
import { AiFillCheckCircle } from "react-icons/ai";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

function LandingPage() {
  return (
    <div>
      <Container id="body">
        <header>
          <Navbar collapseOnSelect expand="md" className="px-0 mt-2">
            <Navbar.Brand href="#">
              <img id="brand-logo" src={brandLogo} alt="brand logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-end"
              id="responsive-navbar-nav"
            >
              <Nav>
                <Nav.Link href="#" id="nav-link-1" className="px-0">
                  Yo'l xatirasi
                </Nav.Link>
                <Nav.Link href="#" id="nav-link-2" className="px-0">
                  A'zolar daraxti
                </Nav.Link>
                <Nav.Link href="#" id="nav-link-3" className="px-0 mr-0">
                  Bog'lanish
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <article id="description">
            <Row xs={1} sm={1} md={2}>
              <Col>
                <h1 id="desc-heading">Dasturlashni bepul o'rganing!</h1>
                <p
                  id="desc-paragraph"
                  className="mt-md-2 mb-md-4 mt-lg-4 mb-lg-5"
                >
                  "Pay IT Forward" saytda siz web-dasturlash uchun eng optimal
                  yo'l xaritasini topishingiz mumkin.
                </p>
                <div>
                  <button
                    className="btn btn-lg btn-danger border-0"
                    id="desc-btn"
                  >
                    Yo'l xaritasi
                  </button>
                </div>
              </Col>

              <Col id="desc-image">
                <img src={headerImg} className="img-fluid" alt="description" />
              </Col>
            </Row>
          </article>
        </header>

        <section id="features">
          <Row xs={1} sm={1} md={2}>
            <Col id="feature-image">
              <img src={featuresImg} className="img-fluid" alt="" />
            </Col>

            <Col className="pl-md-5 d-md-flex align-items-end">
              <Row>
                <Col id="features-desc">
                  <h2>PAY IT FORWARD Communitiy ga qo'shiling!</h2>
                  <p className="my-md-2 my-lg-3">
                    Dasturlashni puxta o'rganishingiz uchun hamjamiyatimiz
                    a'zosiga aylaning. Buning uchun:
                  </p>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <AiFillCheckCircle className="check-circle mr-2" />
                      A'zolar daraxti sahifasiga o'ting.
                    </li>
                    <li>
                      <AiFillCheckCircle className="check-circle mr-2" />
                      Daraxtdagi dasturchilardan biri tanlang.
                    </li>
                    <li>
                      <AiFillCheckCircle className="check-circle mr-2" />
                      Email pochtasiga xat yozing.
                    </li>
                    <li>
                      <AiFillCheckCircle className="check-circle mr-2" />
                      Talab qilinadigan shartlarga rozi bo'ling.
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        <section id="contact-us">
          <div className="text-center">
            <h2>Biz bilan bog'lanish</h2>
            <p className="mt-4 mb-2">
              Har qanday savollaringiz boʻlsa, biz bilan bogʻlaning — va biz
              albatta javob beramiz.
            </p>
            <Row
              xs={3}
              md={1}
              lg={3}
              className="ml-auto mr-auto justify-content-around"
              id="sm-links"
            >
              <Col lg="auto" className="px-0 pt-2">
                <a
                  href="https://t.me/IT_forward"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center justify-content-center justify-content-md-start"
                >
                  <Telegram />
                  <div className="display-none">@IT_forward</div>
                </a>
              </Col>
              <Col lg="auto" className="px-0 pt-2">
                <a
                  href="mailto:bahriddin.abdiev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center justify-content-center justify-content-md-start"
                >
                  <Email />
                  <div className="display-none">bahriddin.abdiev@gmail.com</div>
                </a>
              </Col>
              <Col lg="auto" className="px-0 pt-2">
                <a
                  href="https://www.facebook.com/bahriddin.abdiev"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center justify-content-center justify-content-md-start"
                >
                  <Facebook />
                  <div className="display-none">Pay_IT_Forward</div>
                </a>
              </Col>
            </Row>
          </div>
        </section>
      </Container>

      <footer>
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
                <Col md="auto" id="footer-link" className="ml-md-2 ml-lg-4">
                  <a
                    href="https://twitter.com/KadirovO"
                    target="_blank"
                    rel="noreferrer"
                    id="footer-link-3"
                    className="text-decoration-none"
                  >
                    Twitter
                  </a>
                </Col>
                <Col md="auto" id="footer-link" className="ml-md-2 ml-lg-4">
                  <a
                    href="mailto:bahriddin.abdiev@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    id="footer-link-4"
                    className="text-decoration-none"
                  >
                    Contact us
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default LandingPage;
