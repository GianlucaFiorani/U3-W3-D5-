import { useDispatch, useSelector } from "react-redux";
import { addToFaoritesAction, removeFromFavoritesAction, selectPlayAction } from "../redux/action";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const AlbumCard = ({ singleSong }) => {
  const dispatch = useDispatch();
  const [heart, setHeart] = useState(true);
  const favorites = useSelector((state) => state.favorites.content);

  useEffect(() => {
    favorites.filter((favMusic) => favMusic.id === singleSong.id).length > 0 ? setHeart(false) : setHeart(true);
  }, [favorites]);

  return (
    <Col className="text-center">
      <img className="img-fluid pop" src={singleSong.album.cover_medium} alt="track" onClick={() => dispatch(selectPlayAction(singleSong))} />
      <p className="mb-0">
        Track: "{singleSong.title}"<br />
        Artist: {singleSong.artist.name}
      </p>
      <div
        className="mb-3"
        onClick={() => {
          heart ? dispatch(addToFaoritesAction(singleSong)) : dispatch(removeFromFavoritesAction(singleSong.id));
        }}
      >
        {heart ? <Heart /> : <HeartFill className="text-spoty" />}
      </div>
    </Col>
  );
};
export default AlbumCard;
