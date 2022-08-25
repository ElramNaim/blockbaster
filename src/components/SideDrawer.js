import "./SideDrawer.css";
import MovieContext from "../context/MovieContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function SideDrawer() {
  const { Toggle } = useContext(MovieContext);
  const { Sideout } = useContext(MovieContext);
  const { CartItems } = useContext(MovieContext);
  const { handleAddMovies } = useContext(MovieContext);
  const { handleRemoveMovies } = useContext(MovieContext);
  const { removeMovie } = useContext(MovieContext);

  const SideDrawerClass = ["sidedrawer"];
  if (Toggle) {
    SideDrawerClass.push("show");
  }
  const totalPrice = CartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className={SideDrawerClass.join(" ")}>
      <div className="sideCartHeader">
        <h1>My Cart</h1>
      </div>
      {CartItems?.length === 0 && (
        <div className="sad_empty-cart">
          <h3>Your shopping bag is empty</h3>
          <img
            className="sad_cart_img"
            src="https://toppng.com/uploads/preview/sign-in-empty-cart-ico-11562967535jqgfqtduyd.png"
          ></img>
          <div>
            <a onClick={Sideout} class="previous">
              &laquo; Continue Shopping
            </a>
          </div>
        </div>
      )}
      <div className="full_cart_cont">
        {CartItems.map((item) => (
          <div key={item.id} className="full_cart">
            <img className="img_side_cart" src={item.image} />
            <div className="item_title">{item.title}</div>
            <div className="add-remove-one-cart">
              <button onClick={() => handleAddMovies(item)}>+</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleRemoveMovies(item)}>-</button>
            </div>
            <div>{(item.quantity * item.price).toFixed(2)}$</div>
            <span className="trash" onClick={() => removeMovie(item)}>
              🗑️
            </span>
          </div>
        ))}
      </div>
      <div>
        {totalPrice !== 0 && (
          <div className="footer_totalprice">
            <div>total Price: {totalPrice.toFixed(2)}$</div>
            <Link to="/cart">
              <a onClick={Sideout} class="next">
                go to cart &raquo;
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideDrawer;
