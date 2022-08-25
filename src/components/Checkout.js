import "./Checkout.css";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { Link } from "react-router-dom";

function Checkout() {
  const { submit } = useContext(MovieContext);
  const { thankyouPage } = useContext(MovieContext);
  return (
    <div className="mainscreen">
      <div className="card_checkout ">
        <div className="leftside_checkout">
          <img
            src="https://thumbs.dreamstime.com/b/striped-popcorn-box-3d-glasses-20938625.jpg"
            className="cinema"
            alt="Shoes"
          />
        </div>

        {!submit && (
          <div className="rightside_checkout">
            <form action="">
              <h2>Payment Information</h2>
              <p>Cardholder Name</p>
              <input type="text" className="inputbox_checkout" name="name" />
              <p>Card Number</p>
              <input
                type="number"
                className="inputbox_checkout"
                name="card_number"
                id="card_number"
              />

              <p>Card Type</p>
              <select
                className="inputbox_checkout"
                name="card_type"
                id="card_type"
              >
                <option value="">--Select a Card Type--</option>
                <option value="Visa">Visa</option>
                <option value="RuPay">RuPay</option>
                <option value="MasterCard">MasterCard</option>
              </select>
              <div className="expcvv">
                <p className="expcvv_text">Expiry</p>
                <input
                  type="date"
                  className="inputbox_checkout"
                  name="exp_date"
                  id="exp_date"
                />

                <p className="expcvv_text2">CVV</p>
                <input
                  type="password"
                  className="inputbox_checkout"
                  name="cvv"
                  id="cvv"
                />
              </div>
              <p></p>
              <button type="submit" className="button" onClick={thankyouPage}>
                CheckOut
              </button>
            </form>
          </div>
        )}
        {submit && (
          <div className="rightside_checkout">
            <form action="">
              <div class="wrapper-2">
                <h1>Thank you !</h1>
                <p>Thanks for buying from us. </p>
                <Link to="/">
                  <button class="go-home">go home</button>
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
