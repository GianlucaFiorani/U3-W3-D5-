import { Button, Col, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <Col xs={2}>
      <Nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <Container className="flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </a>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <Link to={"/"} className="nav-item nav-link d-flex align-items-center py-s">
                    <HouseDoorFill />
                    &nbsp; Home
                  </Link>
                </li>
                <li>
                  <Link to={"/favorites"} className="nav-item nav-link d-flex align-items-center py-s">
                    <BookFill />
                    &nbsp; Your Library
                  </Link>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary btn-sm h-100">GO</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className="nav-btn">
          <Button className=" signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
        </div>
      </Nav>
    </Col>
  );
};
export default Sidebar;
