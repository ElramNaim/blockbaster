import React, { useState, useEffect, useContext } from "react";
import MovieContext from "../context/MovieContext";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./ImageSlider.css";

function ImageSlider({ list }) {
  const { searchMovies } = useContext(MovieContext);
  const { MovieList } = useContext(MovieContext);
  const { initialen } = useContext(MovieContext);
  const { handleAddMovies } = useContext(MovieContext);
  const [current, setCurrent] = useState(0);
  const length = MovieList.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    if (length > 1) {
      const interval = setInterval(() => {
        const newBanner = (current + 1) % length;
        setCurrent(newBanner);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [current]);

  // if (!Array.isArray(MovieList) || MovieList.length < 0) {
  //   return null;
  // }

  return (
    <div className="home_div">
      <div className="ops">
        <h1 className="h1_style">
          <br/>
          <b>
            welcome to
            {/* <img  className="welcome" src="https://png.monster/wp-content/uploads/2022/03/png.monster-64.png"></img> */}
          </b>
        </h1>
        <span>
          <img
            className="welcome"
            alt="headline"
            src="https://d1.awsstatic.com/case-studies/EMEA/Blockbuster%20logo.cd30e3e6ba3664ae51e0495ee3b5c57085d43b05.png"
          ></img>
        </span>

        {/* <br />
        <br /> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <br /> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <form className="nosubmit">
          <input
            className="nosubmit"
            type="search"
            placeholder="Search..."
            onChange={(e) => searchMovies(e.target.value)}
          />
        </form>
      </div>

      {length === 0 && (
        <div className="stam">
          <br /> <br /> <br />
          <h1 style={{ color: "white" }}>
            No matches were found for your search
          </h1>
        </div>
      )}
      {initialen === length && (
        <section className="slider">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
          {MovieList.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <div className="container">
                    <Link to={`/Movies/${slide.id}`}>
                      <div className="centered">
                        <h1>{slide.title}</h1>
                        <p>{slide.Plot}</p>
                      </div>
                    </Link>
                    <img src={slide.image} alt={slide.id} className="image" />
                  </div>
                )}
              </div>
            );
          })}
        </section>
      )}
      {initialen !== length && length > 0 && (
        <div>
          <br /> <br />
          <br />
          <section className="movies" style={{ backgroundColor: "black" }}>
            {MovieList.map((pro) => (
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
            ))}
          </section>
        </div>
      )}
    </div>
  );
}

export default ImageSlider;
