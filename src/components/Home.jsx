import { Col, Container, Row } from "react-bootstrap";
import MusicSection from "./MusicSection";
import Sidebar from "./Sidebar";
import Player from "./Player";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BookFill } from "react-bootstrap-icons";
import { useEffect } from "react";

const Home = () => {
  const search = useSelector((state) => state.search.content);

  return (
    <>
      <Container fluid>
        <Link to={"/favorites"} className="btn favorite-link">
          <BookFill />
          &nbsp; Your Library
        </Link>
        <Row>
          <Sidebar />
          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <Row>
              <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
                <a href="#">TRENDING</a>
                <a href="#">PODCAST</a>
                <a href="#">MOODS AND GENRES</a>
                <a href="#">NEW RELEASES</a>
                <a href="#">DISCOVER</a>
              </Col>
            </Row>
            {search && <MusicSection query={search} title="Search:" s={true} />}
            <MusicSection query="queen" title="Rock Classics" />
            <MusicSection query="katyperry" title="Pop Culture" />
            <MusicSection query="eminem" title="#HipHop" h={true} />
          </Col>
        </Row>
      </Container>
      <Player />
    </>
  );
};
export default Home;
