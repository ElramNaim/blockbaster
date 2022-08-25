import "./Movies.css";
import Movie from "./Movie";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import ImageSlider from "./ImageSlider";

function Movies() {
  const { searchMovies } = useContext(MovieContext);
  const { handleAddMovies } = useContext(MovieContext);
  const { MovieList } = useContext(MovieContext);
  const MoviesList = MovieList.map((movie) => (
    <Movie
      key={movie.id}
      id={movie.id}
      price={movie.price}
      title={movie.title}
      image={movie.image}
      plot={movie.Plot}
      handleAddMovies={handleAddMovies}
    />
  ));
  const len = MovieList.length;
  return (
    <div
      className="Moviesdiv"
      style={{
        backgroundImage: `url("https://s.studiobinder.com/wp-content/uploads/2020/04/Best-Movies-of-2014-Featured.jpg")`,
      }}
    >
      <form className="nosubmit">
        <input
          className="nosubmit"
          type="search"
          placeholder="Search..."
          onChange={(e) => searchMovies(e.target.value)}
        />
      </form>
      {len === 0 && (
        <div className="stam">No matches were found for your search</div>
      )}
      <section className="movies">{MoviesList}</section>
    </div>
  );
}
export default Movies;
