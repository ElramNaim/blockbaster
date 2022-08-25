import "./BackDrawer.css";
import MovieContext from "../context/MovieContext";
import { useContext } from "react";

function BackDrawer() {
  const { Toggle } = useContext(MovieContext);
  const { Sideout } = useContext(MovieContext);
  return Toggle && <div className="backdrawer" onClick={Sideout}></div>;
}

export default BackDrawer;
