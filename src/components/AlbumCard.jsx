import { useDispatch, useSelector } from "react-redux";
import { addToFaoritesAction, removeFromFavoritesAction, selectPlayAction } from "../redux/action";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const AlbumCard = ({ singleSong, p }) => {
  const dispatch = useDispatch();
  const [heart, setHeart] = useState(true);
  const favorites = useSelector((state) => state.favorites.content);

  useEffect(() => {
    favorites.filter((favMusic) => favMusic.id === singleSong.id).length > 0 ? setHeart(false) : setHeart(true);
  }, [favorites, singleSong]);

  return (
    <Col className={!p && "text-center"}>
      <div className={p && "d-flex h-100 playing text-white position-absolute top-0 start-0 align-items-center gap-3"}>
        <img
          width={p && 80}
          className={`${!p && "pop"} img-fluid`}
          src={singleSong.album.cover_medium}
          alt="track"
          onClick={() => dispatch(selectPlayAction(singleSong))}
        />
        <div className={`mb-0 ${p && "text-truncate"}`}>
          <p className={`mb-0 ${p && "text-truncate"}`}>Track: "{singleSong.title}"</p>
          <p className={`mb-0 pt-0 ${p && "text-truncate "}`}>Artist: {singleSong.artist.name}</p>
        </div>
        <div
          className="mb-3"
          onClick={() => {
            heart ? dispatch(addToFaoritesAction(singleSong)) : dispatch(removeFromFavoritesAction(singleSong.id));
          }}
        >
          {heart ? <Heart /> : <HeartFill className="text-spoty" />}
        </div>
      </div>
    </Col>
  );
};
export default AlbumCard;
