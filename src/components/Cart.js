import "./Cart.css";
import { Link } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import { useContext } from "react";

function Cart() {
  const { CartItems } = useContext(MovieContext);
  const { handleAddMovies } = useContext(MovieContext);
  const { handleRemoveMovies } = useContext(MovieContext);
  const totalPrice = CartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div style={{ backgroundColor: " rgba(0,0,0,0.2)", height: "80%" }}>
      <h2>Shopping Cart</h2>
      {CartItems?.length === 0 && (
        <div className="cart-empty">
          <div className="imgdiv">
            <img
              className="cart-image"
              alt="empty_cart"
              src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png"
            ></img>
          </div>
          <div className="empty">
            <p>your cart is empty</p>
            <p>
              <Link to="/">
                <button className="startshopping">start shopping now!</button>
              </Link>
            </p>
          </div>
        </div>
      )}
      <div className="carscreen">
        <div className="someDiv">
          {CartItems.map((item) => (
            <div className="cartpage">
              <div className="left_side">
                <div className="left_pic">
                  <img src={item.image} alt={item.title} />
                </div>
                <p className="left_name">{item.title}</p>
                <p>Price: {item.price}</p>
                <p>
                  <button onClick={() => handleAddMovies(item)}>+</button>
                  <span className="itemQuantity">{item.quantity}</span>
                  <button onClick={() => handleRemoveMovies(item)}>-</button>
                </p>
                <p> {item.quantity * item.price.toFixed(2)}$</p>
              </div>
            </div>
          ))}
        </div>
        {totalPrice !== 0 && (
          <div className="rightside">
            <div>total Price: {totalPrice.toFixed(2)}$</div>
            <div> shipping : Free</div>
            <Link to="/checkout">
              <button className="checkout">Procced to checkout!</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
