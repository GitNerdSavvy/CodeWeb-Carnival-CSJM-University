import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/csjm.png";

import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span
              style={{ filter: "invert(100%)" }}
              className="navbar-toggler-icon "
            ></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#member"
                className={
                  activeLink === "member" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("member")}
              >
                Members
              </Nav.Link>

              <Nav.Link
                href="#Clubs"
                className={
                  activeLink === "club" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("club")}
              >
                Join Now
              </Nav.Link>

              <Nav.Link
                href="#footer"
                className={
                  activeLink === "footer" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("club")}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
