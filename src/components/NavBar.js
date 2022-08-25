import "./NavBar.css";
import { Link } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import { useContext } from "react";
function NavBar({ Toggle }) {
  const { Cartlength } = useContext(MovieContext);
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">
          <img
            alt="headline"
            src="https://d1.awsstatic.com/case-studies/EMEA/Blockbuster%20logo.cd30e3e6ba3664ae51e0495ee3b5c57085d43b05.png"
          ></img>
        </Link>
      </h1>
      <ul className="main-nav">
        <div className="startNav">
          <li>
            <i className="navCart">
              <Link to="/">Home</Link>
            </i>
          </li>
          <li>
            <a>About</a>
          </li>
        </div>
        <li>
          <i className="i_smallPage">
            <Link to="/Movies">All Movies</Link>
          </i>
        </li>
        <li>
          <button className="navCart" onClick={Toggle}>
            <i className="fa fa-shopping-cart icon"></i>
            <span className="cart_badge">{Cartlength}</span>
          </button>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
