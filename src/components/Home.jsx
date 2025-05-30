import { Col, Container, Row } from "react-bootstrap";
import MusicCollaction from "./MusicSection";
import Sidebar from "./Sidebar";
import Player from "./Player";

const Home = () => {
  const s = false;
  return (
    <>
      <Container fluid>
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
            {s && <MusicCollaction query="queen" title="Search:" />}
            <MusicCollaction query="queen" title="Rock Classics" />
            <MusicCollaction query="katyperry" title="Pop Culture" />
            <MusicCollaction query="eminem" title="#HipHop" h={true} />
          </Col>
        </Row>
      </Container>
      <Player />
    </>
  );
};
export default Home;
