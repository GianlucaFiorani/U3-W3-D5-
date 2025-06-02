import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";

const Player = () => {
  const selected = useSelector((state) => state.selected.content);

  return (
    <Container fluid className=" fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className=" h-100 flex-column justify-content-center align-items-center position-relative">
            <Col xs={6} md={8}>
              {selected && <AlbumCard p={true} singleSong={selected} />}
            </Col>
            <Col xs={6} md={4} className=" playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <ProgressBar className=" mt-3" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Player;
