import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMusicAction } from "../redux/action";
import AlbumCard from "./AlbumCard";

const MusicSection = ({ title, query, h }) => {
  const dispatch = useDispatch();
  const music = useSelector((state) => state.music.content.data);
  const search = useSelector((state) => state.music.search.data);
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  useEffect(() => {
    console.log(search);
    console.log(query);
    dispatch(getMusicAction(baseEndpoint + query));
  }, []);

  return (
    <Row>
      <Col xs={10}>
        <div className="music">
          <h2>{title}</h2>
          <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id={h && "hipHopSection"}>
            {music?.slice(0, 4).map((song) => (
              <AlbumCard key={song.id} singleSong={song} />
            ))}
          </Row>
        </div>
      </Col>
    </Row>
  );
};
export default MusicSection;
