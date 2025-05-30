import { useEffect, useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToFaoritesAction, removeFromFavoritesAction } from "../redux/action";

const PlayingSong = () => {
  const dispatch = useDispatch();
  const [heart, setHeart] = useState(true);
  const selected = useSelector((state) => state.selected.content);
  const favorites = useSelector((state) => state.favorites.content);

  useEffect(() => {
    favorites.filter((favMusic) => favMusic.id === selected.id).length > 0 ? setHeart(false) : setHeart(true);
  }, [favorites, selected]);

  return (
    <div className="d-flex h-100 playing text-white">
      <img width={100} src={selected.album.cover_medium} alt="track" />
      <p className="mb-0 ">
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
