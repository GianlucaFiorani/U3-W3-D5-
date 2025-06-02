import { Button, Col, Container, Form, Nav } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchAction } from "../redux/action";
const Sidebar = () => {
  const dispach = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispach(searchAction(query));
  };

  return (
    <Col xs={2}>
      <Nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <Container className="flex-column align-items-start">
          <a className="navbar-brand" href="/">
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
                  <Form className="input-group mt-3" onSubmit={handleSubmit}>
                    <Form.Control type="search" value={query} onChange={handleChange} placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                      <Button variant="outline-secondary" className=" btn-sm h-100" type="submit">
                        GO
                      </Button>
                    </div>
                  </Form>
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
