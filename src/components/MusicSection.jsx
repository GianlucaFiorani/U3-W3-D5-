import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMusicAction } from "../redux/action";
import AlbumCard from "./AlbumCard";

const MusicSection = ({ title, query, h, s }) => {
  const dispatch = useDispatch();
  const [music, setMusic] = useState([]);
  const search = useSelector((state) => state.music.search);
  const isLoading = useSelector((state) => state.music.isLoading);
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  useEffect(() => {
    dispatch(getMusicAction(baseEndpoint + query));
  }, [query]);
  useEffect(() => {
    !isLoading && setMusic(JSON.parse(localStorage.getItem(query)));
  }, [isLoading]);

  return (
    <Row>
      <Col xs={10}>
        <div className="music">
          <h2>{title}</h2>
          <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id={h && "hipHopSection"}>
            {music?.data?.slice(0, 4).map((song) => (
              <AlbumCard key={song.id} singleSong={song} />
            ))}
          </Row>
        </div>
      </Col>
    </Row>
  );
};
export default MusicSection;
