import './MemberAccount.css';
import { Container } from 'react-bootstrap';
import husanImg from './memberImages/husan-img.jpg';
import Icon1 from './studentsNum/icon-1/icon-1';
import Testimonail from './testimonail/Testimonail';
import { Row, Col, ProgressBar, Carousel } from 'react-bootstrap';

function MemberAccount() {
    return (
        <Container id="account">
            <Row className="mt-2" id="acc-header">
                <Col sm={12} md="auto" lg="auto" className="d-flex justify-content-center w-330">
                    <img src={husanImg} alt="Husan" className="img-fluid" />
                </Col>
                <Col sm={12} md={6} lg={7} className="w-330">
                    <h1 className="text-center text-md-left">Husan Eshonqulov</h1>
                    <h3 className="text-center text-md-left">Web Developer</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore itaque architecto ea labore veniam!
                    </p>
                    <Row xs={1} lg={2} className="my-2" >
                        <Col className="acc-info"><span className="font-weight-bold mr-2">City:</span> something</Col>
                        <Col className="acc-info"><span className="font-weight-bold mr-2">Phone:</span> something</Col>
                        <Col className="acc-info"><span className="font-weight-bold mr-2">Email:</span> something</Col>
                        <Col className="acc-info"><span className="font-weight-bold mr-2">Degree:</span> something</Col>
                        <Col className="acc-info"><span className="font-weight-bold mr-2">Freelance:</span> something</Col>
                        <Col className="acc-info"><span className="font-weight-bold mr-2">Website:</span> something</Col>
                    </Row>
                    <p className="d-md-none d-lg-block">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur molestiae, alias explicabo
                        consequuntur itaque quisquam repellat eos magnam doloremque, maxime possimus amet nulla et quia
                        non at ad. Reprehenderit enim molestias.
                    </p>
                </Col>
                <Col className="d-none d-md-block d-lg-none my-2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur molestiae, alias explicabo
                        consequuntur itaque quisquam repellat eos magnam doloremque, maxime possimus amet nulla et quia
                        non at ad. Reprehenderit enim molestias.
                    </p>
                </Col>
            </Row>

            <Row xs={1} md={3} id="students" className="my-4">
                <Col className="d-flex justify-content-center align-items-cente my-1 py-3 px-0 w-33">
                    <div className="mr-4"><Icon1 /></div>
                    <div>
                        <div className="font-weight-bold number">90+</div>
                        <div>Users</div>
                    </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-cente my-1 py-3 px-0 w-33">
                    <div className="mr-4"><Icon1 /></div>
                    <div>
                        <div className="font-weight-bold number">90+</div>
                        <div>Users</div>
                    </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-cente my-1 py-3 px-0 w-33 border-right-0 border-bottom-0">
                    <div className="mr-4"><Icon1 /></div>
                    <div>
                        <div className="font-weight-bold number">90+</div>
                        <div>Users</div>
                    </div>
                </Col>
            </Row>

            <Row className="mt-5 hr-line">
                <Col className="mt-3 mb-2">
                    <span>SKILLS</span>
                    <hr />
                </Col>
            </Row>

            <Row xs={1} md={2} id="skills" className="mb-5">
                <Col className="my-1">
                    <div className="d-flex align-items-center  justify-content-between">
                        <div className="skill-name font-weight-bold">HTML</div>
                        <div>level</div>
                    </div>
                    <ProgressBar now={77} variant={"green-bar"} className="progress-thiner" />
                </Col>
                <Col className="my-1">
                    <div className="d-flex align-items-center  justify-content-between">
                        <div className="skill-name font-weight-bold">CSS</div>
                        <div>level</div>
                    </div>
                    <ProgressBar now={60} variant={"green-bar"} className="progress-thiner" />
                </Col>
                <Col className="my-1">
                    <div className="d-flex align-items-center  justify-content-between">
                        <div className="skill-name font-weight-bold">JAVASCRIPT</div>
                        <div>level</div>
                    </div>
                    <ProgressBar now={74} variant={"green-bar"} className="progress-thiner" />
                </Col>
                <Col className="my-1">
                    <div className="d-flex align-items-center  justify-content-between">
                        <div className="skill-name font-weight-bold">BOOTSTRAP</div>
                        <div>level</div>
                    </div>
                    <ProgressBar now={55} variant={"green-bar"} className="progress-thiner" />
                </Col>
                <Col className="my-1">
                    <div className="d-flex align-items-center  justify-content-between">
                        <div className="skill-name font-weight-bold">REACT JS</div>
                        <div>level</div>
                    </div>
                    <ProgressBar now={63} variant={"green-bar"} className="progress-thiner" />
                </Col>
                <Col className="my-1">
                    <div className="d-flex align-items-center  justify-content-between">
                        <div className="skill-name font-weight-bold">REDUX</div>
                        <div>level</div>
                    </div>
                    <ProgressBar now={34} variant={"green-bar"} className="progress-thiner" />
                </Col>
            </Row>

            <Row className="mt-5 hr-line">
                <Col className="mt-3 mb-2">
                    <span>PROJECTS</span>
                    <hr />
                </Col>
            </Row>

            <Container>
                <Row xs={1} md={3} lg={4} xl={5} id="projects" className="justify-content-center mt-3 mb-5">
                    <Col className="m-2 p-3 project">Project 1</Col>
                    <Col className="m-2 p-3 project">Project 2</Col>
                    <Col className="m-2 p-3 project">Project 3</Col>
                    <Col className="m-2 p-3 project">Project 4</Col>
                    <Col className="m-2 p-3 project">Project 5</Col>
                    <Col className="m-2 p-3 project">Project 6</Col>
                    <Col className="m-2 p-3 project">Project 7</Col>
                    <Col className="m-2 p-3 project">Project 8</Col>
                    <Col className="m-2 p-3 project">Project 9</Col>
                    <Col className="m-2 p-3 project">Project 10</Col>
                    <Col className="m-2 p-3 project">Project 11</Col>
                    <Col className="m-2 p-3 project">Project 12</Col>
                </Row>
            </Container>

            <Row className="mt-5 hr-line">
                <Col className="mt-3 mb-2">
                    <span>TESTIMONAILS</span>
                    <hr />
                </Col>
            </Row>

            {/* <div className="mt-2 mb-5" id="testimonails">
                <Row xs={1} md={2} lg={3}>
                    <Col><Testimonail /></Col>
                    <Col><Testimonail /></Col>
                    <Col><Testimonail /></Col>
                </Row>
            </div> */}

            <Carousel>
                <Carousel.Item>
                    <Row xs={1} md={2} lg={3}>
                        <Col><Testimonail /></Col>
                        <Col><Testimonail /></Col>
                        <Col><Testimonail /></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row xs={1} md={2} lg={3}>
                        <Col><Testimonail /></Col>
                        <Col><Testimonail /></Col>
                        <Col><Testimonail /></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row xs={1} md={2} lg={3}>
                        <Col><Testimonail /></Col>
                        <Col><Testimonail /></Col>
                        <Col><Testimonail /></Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Container >
    );
}

export default MemberAccount;