import '../LandingPage/LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import brandLogo from './LandingPageImages/brand-logo.png';
import headerImg from './LandingPageImages/header-image.svg';
import featuresImg from './LandingPageImages/features-img.svg';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function LandingPage() {
    return (
        <Container id="body">
            <header>
                <Navbar collapseOnSelect expand="md" className="px-0 mt-2">
                    <Navbar.Brand href="#">
                        <img id="brand-logo" src={brandLogo} alt="brand logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#" id="nav-link-1" className="px-0">Navigation</Nav.Link>
                            <Nav.Link href="#" id="nav-link-2" className="px-0">Navigation</Nav.Link>
                            <Nav.Link href="#" id="nav-link-3" className="px-0 mr-0">Navigation</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <article id="description" className="mt-5">
                    <Row xs={1} sm={2}>
                        <Col className="mt-sm-4">
                            <h1 id="desc-heading" className="mb-4">Lorem ipsum dolor sit amet consectetur</h1>
                            <p id="desc-paragraph">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sunt non explicabo dolorum molestias
                            </p>
                            <div id="btn-con" className="mt-5">
                                <button className="btn btn-lg btn-danger border-0" id="desc-btn">Get Started</button>
                            </div>
                        </Col>

                        <Col id="desc-image" className="mt-sm-4">
                            <img src={headerImg} className="img-fluid" alt="description" />
                        </Col>
                    </Row>
                </article>
            </header>

            <section id="features" className="mt-5">
                <Row xs={1} sm={2}>
                    <Col id="feature-image" className="mt-sm-5">
                        <img src={featuresImg} className="img-fluid" alt="feature image" />
                    </Col>

                    <Col className="mt-sm-5 pl-sm-5 d-sm-flex align-items-end">
                        <Row>
                            <Col id="features-desc">
                                <h2>We Provide Many Features You Can Use</h2>
                                <p className="my-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi pariatur, animi facilis quas eius quia fuga totam!
                                </p>
                                <ul className="list-unstyled mb-0">
                                    <li><AiFillCheckCircle className="check-circle mr-2" />feature 1</li>
                                    <li><AiFillCheckCircle className="check-circle mr-2" />feature 2</li>
                                    <li><AiFillCheckCircle className="check-circle mr-2" />feature 3</li>
                                    <li><AiFillCheckCircle className="check-circle mr-2" />feature 4</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>

            <footer className="mt-5 mb-4">
                <Row>
                    <Col sm={12} md={5} lg={6}>
                        <div id="footer-cap" className="font-weight-bolder">Open Enterprise</div>
                    </Col>

                    <Col sm={12} md={7} lg={6}>
                        <Row sm={1} md={4} className="justify-content-end">
                            <Col id="footer-link" md="auto" className="mr-md-3 px-0">
                                <a href="#" id="footer-link-1" className="text-decoration-none">Docs</a>
                            </Col>
                            <Col id="footer-link" md="auto" className="mr-md-3 px-0">
                                <a href="#" id="footer-link-2" className="text-decoration-none">GitHub</a>
                            </Col>
                            <Col id="footer-link" md="auto" className="mr-md-3 px-0">
                                <a href="#" id="footer-link-3" className="text-decoration-none">Twitter</a>
                            </Col>
                            <Col id="footer-link" md="auto" className="px-0">
                                <a href="#" id="footer-link-4" className="text-decoration-none">Contact us</a>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </footer>

            {/* <div className="row align-items-center">
                <div className="col-md-6">
                    <div id="footer-cap" className="font-weight-bolder">Open Enterprise</div>
                </div>

                <div className="col-md-6">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 mt-3" id="footer-link">
                            <a
                                href="#"
                                id="footer-link-1"
                                className="text-decoration-none font-weight-medium"
                            >
                                Docs
                                    </a>
                        </div>
                        <div className="col-xl-3 col-md-6 mt-3" id="footer-link">
                            <a
                                href="#"
                                id="footer-link-2"
                                className="text-decoration-none font-weight-medium"
                            >
                                GitHub
                                    </a>
                        </div>
                        <div className="col-xl-3 col-md-6 mt-3" id="footer-link">
                            <a
                                href="#"
                                id="footer-link-3"
                                className="text-decoration-none font-weight-medium"
                            >
                                Twitter
                                    </a>
                        </div>
                        <div className="col-xl-3 col-md-6 mt-3" id="footer-link">
                            <a
                                href="#"
                                id="footer-link-4"
                                className="text-decoration-none font-weight-medium"
                            >
                                Contact us
                                    </a>
                        </div>
                    </div>
                </div>
            </div> */}
        </Container>
    );
}

export default LandingPage;