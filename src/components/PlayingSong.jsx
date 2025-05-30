import { useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const PlayingSong = () => {
  const dispatch = useDispatch();
  const [heart, setHeart] = useState(true);
  const selected = useSelector((state) => state.selected.content);
  return (
    <div className="d-flex playing">
      <img width={50} src={selected.album.cover_medium} alt="track" />
      <p className="mb-0">
        Track: "{selected.title}"<br />
        Artist: {selected.artist.name}
      </p>
      <div
        className="mb-3"
        onClick={() => {
          heart ? dispatch(addToFaoritesAction(selected)) : dispatch(removeFromFavoritesAction(selected.id));
          setHeart(!heart);
        }}
      >
        {heart ? <Heart /> : <HeartFill className="text-spoty" />}
      </div>
    </div>
  );
};
export default PlayingSong;
