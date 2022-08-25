import "./Movie.css";
import MovieContext from "../context/MovieContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Movie(pro) {
  const { handleAddMovies } = useContext(MovieContext);

  return (
    <div className="column">
      <img src={pro.image} />
      <h4>{pro.title}</h4>
      <h6>{pro.price}$</h6>
      <div className="movie_buttons">
        <div>
          <Link to={`/Movies/${pro.id}`}>
            <button className="btn btn-default" type="button">
              view more
            </button>
          </Link>
        </div>
        <div className="text-center container-card-button">
        <i className="fa fa-shopping-cart icon-card"></i>
          <button
            type="button"
            className="btn btn-default_add"
            onClick={() => handleAddMovies(pro)}
          >
            Add to Cart
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default Movie;
