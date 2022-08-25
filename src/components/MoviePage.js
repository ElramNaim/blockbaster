import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import MovieContext from "../context/MovieContext";
import "./MoviePage.css";
import YouTube from "./youTube/YouTube";

function MoviePage() {
  const params = useParams();
  const [hover, setHover] = useState(false);
  const id = params.id;

  const { MovieList } = useContext(MovieContext);
  const { handleAddMovies } = useContext(MovieContext);

  const Exist = MovieList.find((item) => Number(item.id) === Number(id));
  let MovieExist = {};
  if (Exist) {
    MovieExist = Exist;
  }
  return (
    <div
      className="MoviePage"
      style={{
        backgroundImage: `url(${MovieExist.image})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="moviePage_left">
        <div className="left_img">
          <div onClick={() => setHover(true)}>
            {hover ? (
              <YouTube movie={MovieExist.Trailer} />
            ) : (
              <div className="video">
                <img src={MovieExist.image} />
                <a href="#"></a>
              </div>
            )}
          </div>
        </div>
        <div className="left_info">
          <p className="leftname">{MovieExist.title}</p>
          <p className="plot">Actors: {MovieExist.Actors}</p>
          <p className="plot">Runtime: {MovieExist.Runtime}</p>
          <p className="plot">
            Plot:
            <br /> {MovieExist.Plot}
          </p>
        </div>
      </div>
      <div className="moviePage_right">
        <div className="right_info">
          <p>
            price:<span>{MovieExist.price}</span>
          </p>
          <p>
            Status:<span>Available</span>
          </p>
          <p>
            <button type="button" onClick={() => handleAddMovies(MovieExist)}>
              Add to cart
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
