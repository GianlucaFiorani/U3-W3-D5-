import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";
import Sidebar from "./Sidebar";
import Player from "./Player";
import { HouseDoorFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.content);
  return (
    <Container fluid>
      <Link to={"/"} className="btn favorite-link">
        <HouseDoorFill />
        &nbsp; Home
      </Link>
      <Row>
        <Sidebar />
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <h2 className="text-white mt-5 mb-4 my-md-3">Favorites</h2>
          <Row xs={1} sm={2} lg={3} xl={4}>
            {favorites.map((song) => (
              <AlbumCard key={song.id} singleSong={song} />
            ))}
          </Row>
        </Col>
      </Row>
      <Player />
    </Container>
  );
};
export default Favorites;
