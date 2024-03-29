import brandLogo from "./LandingPageImages/Logo-full.svg";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarNavigation() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="md" className="px-0 mt-2">
        <Navbar.Brand href="#">
          <Link to="/">
            <img id="brand-logo" src={brandLogo} alt="brand logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Link className="navStyle" to="/roadmap">
              <Nav.Link href="/roadmap" id="nav-link-1" className="px-0">
                Yo'l xatirasi
              </Nav.Link>
            </Link>
            <Link className="navStyle" to="/organization-tree">
              <Nav.Link
                href="/organization-tree"
                id="nav-link-2"
                className="px-0"
              >
                A'zolar daraxti
              </Nav.Link>
            </Link>
            <Link className="navStyle" to="/introduction">
              <Nav.Link
                href="/introduction"
                id="nav-link-3"
                className="px-0 mr-0"
              >
                Biz haqimizda
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavbarNavigation;
