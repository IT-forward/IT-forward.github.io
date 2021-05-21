import '../LandingPage/LandingPage.css';
import brandLogo from './LandingPageImages/brand-logo.png';
import headerImg from './LandingPageImages/header-image.svg';
import featuresImg from './LandingPageImages/features-img.svg';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { ImFacebook2 } from 'react-icons/im';
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

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

                <article id="description">
                    <Row xs={1} sm={1} md={2}>
                        <Col>
                            <h1 id="desc-heading">Lorem ipsum dolor sit amet consectetur</h1>
                            <p id="desc-paragraph" className="mt-md-2 mb-md-4 mt-lg-4 mb-lg-5">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sunt non explicabo dolorum molestias
                            </p>
                            <div>
                                <button className="btn btn-lg btn-danger border-0" id="desc-btn">Get Started</button>
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
                        <img src={featuresImg} className="img-fluid" alt="feature image" />
                    </Col>

                    <Col className="pl-md-5 d-md-flex align-items-end">
                        <Row>
                            <Col id="features-desc">
                                <h2>We Provide Many Features You Can Use</h2>
                                <p className="my-md-2 my-lg-3">
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


            <section id="contact-us">
                <div className="text-center">
                    <h2>Biz bilan bog'lanish</h2>
                    <p className="mt-4 mb-2">
                        Har qanday savollaringiz boʻlsa, biz bilan bogʻlaning — va biz albatta javob beramiz.
                    </p>
                    <Row sm={1} md={3} className="ml-auto mr-auto justify-content-between">
                        <Col md="auto" className="px-0">
                            <a href="https://t.me/IT_forward"><FaTelegram className="mr-2" />@IT_forward</a>
                        </Col>
                        <Col md="auto" className="px-0">
                            <a href="mailto:bahriddin.abdiev@gmail.com"><IoIosMail className="mr-2" />bahriddin.abdiev@gmail.com</a>
                        </Col>
                        <Col md="auto" className="px-0">
                            <a href="#"><ImFacebook2 className="mr-2" />facebook.com/Pay_IT_Forward</a>
                        </Col>
                    </Row>
                </div>
            </section>


            <footer>
                <Row>
                    <Col sm={12} md={3} lg={4} className="d-flex align-items-center justify-content-center justify-content-md-start">
                        <div id="footer-cap" className="font-weight-bolder">Open Enterprise</div>
                    </Col>

                    <Col sm={12} md={9} lg={8}>
                        <Row sm={1} md={4} className="justify-content-end text-center">
                            <Col md="auto" id="footer-link" className="ml-md-3 ml-lg-5">
                                <a href="#" id="footer-link-1" className="text-decoration-none">Docs</a>
                            </Col>
                            <Col md="auto" id="footer-link" className="ml-md-3 ml-lg-5">
                                <a href="#" id="footer-link-2" className="text-decoration-none">GitHub</a>
                            </Col>
                            <Col md="auto" id="footer-link" className="ml-md-3 ml-lg-5">
                                <a href="#" id="footer-link-3" className="text-decoration-none">Twitter</a>
                            </Col>
                            <Col md="auto" id="footer-link" className="ml-md-3 ml-lg-5">
                                <a href="#" id="footer-link-4" className="text-decoration-none">Contact us</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </footer>
        </Container>
    );
}

export default LandingPage;