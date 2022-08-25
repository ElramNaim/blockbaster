import "./App.css";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ImageSlider from "./components/ImageSlider";
// import SliderData from "./components/SliderData";
import BackDrawer from "./components/BackDrawer";
import SideDrawer from "./components/SideDrawer";
import MovieContext from "./context/MovieContext";
import MoviePage from "./components/MoviePage";
import Checkout from "./components/Checkout";

let initialMovies = [];
function App() {
  const [MovieList, setMovieList] = useState(initialMovies);
  const [CartItems, setCartItem] = useState([]);
  const [Cartlength, setCartlength] = useState(CartItems.length);
  const [Toggle, setToggle] = useState(false);
  const [initialen, setinitialen] = useState(0);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch("http://localhost:6857/movies")
      .then((res) => res.json())
      .then((arrMovies) => {
        setMovieList(arrMovies);
        setinitialen(arrMovies.length);
        initialMovies = arrMovies.slice();
      });
  };

  const cartArr = CartItems;
  const handleAddMovies = (movie) => {
    setCartlength(Cartlength + 1);
    const MovieExist = cartArr.find((item) => item.id === movie.id);
    if (!MovieExist) {
      setCartItem([...cartArr, { ...movie, quantity: 1 }]);
    } else {
      setCartItem(
        CartItems.map((item) =>
          item.id === movie.id
            ? { ...MovieExist, quantity: MovieExist.quantity + 1 }
            : item
        )
      );
    }
  };

  const handleRemoveMovies = (movie) => {
    if (Cartlength > 0) {
      setCartlength(Cartlength - 1);
    }
    const MovieExist = cartArr.find((item) => item.id === movie.id);
    if (MovieExist.quantity > 1) {
      setCartItem(
        CartItems.map((item) =>
          item.id === movie.id
            ? { ...MovieExist, quantity: MovieExist.quantity - 1 }
            : item
        )
      );
    } else {
      setCartItem(cartArr.filter((item) => item.id !== movie.id));
    }
  };

  const removeMovie = (movie) => {
    const MovieExist = cartArr.find((item) => item.id === movie.id);
    setCartItem(cartArr.filter((item) => item.id !== movie.id));
    if (MovieExist.quantity > 1) {
      setCartlength(Cartlength - MovieExist.quantity);
    } else {
      setCartlength(Cartlength - 1);
    }
  };

  const Sidein = () => {
    setToggle(true);
  };
  const Sideout = () => {
    setToggle(false);
  };

  const searchMovies = (title) => {
    if (title === "") {
      setMovieList(initialMovies);
    } else {
      setMovieList(
        initialMovies.filter((movie) =>
          movie.title.toLowerCase().includes(title)
        )
      );
    }
  };
  const [submit, setsubmit] = useState(false);
  const thankyouPage = () => {
    setsubmit(true);
    setCartItem([]);
    setCartlength(0);
  };
  return (
    <MovieContext.Provider
      value={{
        Cartlength,
        Sideout,
        CartItems,
        handleAddMovies,
        handleRemoveMovies,
        MovieList,
        Toggle,
        removeMovie,
        searchMovies,
        submit,
        thankyouPage,
        initialen,
      }}
    >
      <div>
        <NavBar Toggle={Sidein} />
        <BackDrawer />
        <SideDrawer />
        <Routes>
          <Route
            path="Movies"
            element={
              <Movies movies={MovieList} handleAddMovies={handleAddMovies} />
            }
          />
          <Route path="cart" element={<Cart />} />
          <Route path="Movies/:id" element={<MoviePage movies={MovieList} />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/" element={<ImageSlider />} />
        </Routes>
      </div>
    </MovieContext.Provider>
  );
}

export default App;
