import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";
import Sidebar from "./Sidebar";
import Player from "./Player";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.content);
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <h1>Favorites</h1>
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
