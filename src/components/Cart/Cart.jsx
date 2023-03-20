import "./Cart.scss";
import { MdClose } from "react-icons/md";
// import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>

      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shoping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

        {/* <div className="empty-cart"></div>
            <BsCartX />
            <span>No Products in Cart</span>
            <button className="return-cta">Return to shop</button>
        */}

        <>
          <CartItem />

          <div className="cart-footer">
            <div className="subtotal">
              <div className="text">Subtotal</div>
              <div className="text-total">&#8377;1234</div>
            </div>
            <div className="button">
              <div className="checkout-cta">Checkout</div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
