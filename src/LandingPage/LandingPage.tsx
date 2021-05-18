import '../LandingPage/LandingPage.css';
import headerImg from './LandingPageImages/header-image.svg';
import brandLogo from './LandingPageImages/Pay IT Forward logo.jpg';
import featuresImg from './LandingPageImages/features-img.svg';
import { AiFillCheckCircle } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function LandingPage() {
    return (
        <div id="body">
            <div id="header">
                <div className="container-xl">
                    <Navbar collapseOnSelect expand="md" className="px-0">
                        <Navbar.Brand href="#home" id="brand-logo">Pay IT Forward</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link
                                    href="#"
                                    id="nav-link-1"
                                    className="font-weight-medium px-0"
                                >
                                    Navigation
                                </Nav.Link>
                                <Nav.Link
                                    href="#"
                                    id="nav-link-2"
                                    className="font-weight-medium px-0"
                                >
                                    Navigation
                                </Nav.Link>
                                <Nav.Link
                                    href="#"
                                    id="nav-link-3"
                                    className="font-weight-medium mr-0 px-0"
                                >
                                    Navigation
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <div id="description">
                        <div className="row">
                            <div className="col-md-6" id="desc-text">
                                <h1 id="desc-heading">Lorem ipsum dolor sit amet consectetur</h1>
                                <p id="desc-paragraph">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sunt non explicabo dolorum molestias
                                </p>
                                <div id="btn-con">
                                    <button className="btn btn-lg btn-danger border-0" id="desc-btn">Get Started</button>
                                </div>
                            </div>

                            <div className="col-md-6" id="desc-image">
                                <img src={headerImg} className="img-fluid" alt="description" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div id="features">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-end" id="feature-image">
                            <img src={featuresImg} className="img-fluid" alt="feature image" />
                        </div>

                        <div className="col-md-6 d-flex align-items-end">
                            <div className="ml-auto mr-auto" id="features-desc">
                                <h2 className="font-weight-medium">We Provide Many Features You Can Use</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi pariatur, animi facilis quas eius quia fuga totam!
                                </p>
                                <ul className="list-unstyled mb-0">
                                    <li><AiFillCheckCircle className="check-circle" />feature 1</li>
                                    <li><AiFillCheckCircle className="check-circle" />feature 2</li>
                                    <li><AiFillCheckCircle className="check-circle" />feature 3</li>
                                    <li><AiFillCheckCircle className="check-circle" />feature 4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer">
                <div className="container-xl">
                    <div className="row align-items-center">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;