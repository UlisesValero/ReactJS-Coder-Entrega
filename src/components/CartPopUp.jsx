import "../App.css";
import { useState, useEffect } from "react";

const CartPopUp = ({ isOpened, onClose }) => {
  const [text, setText] = useState("→");

  useEffect(() => {
    if (!isOpened) {
      setText("→");
    }
  }, [isOpened]);

  const handleMouseEnter = () => {
    setText(
      <>
        c<br />
        l<br />
        o<br />
        s<br />
        e
      </>
    );
  };

  const handleMouseLeave = () => {
    setText("→");
  };

  if (!isOpened) return null;

  return (
    <section className="cartPopUp">
      <div className="cardContainer">
        {/* Contenido del carrito */}
      </div>
      <div className="payContainer">
        {/* Contenido de pago */}
      </div>
      <div
        className="closeButton"
        onClick={onClose}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </div>
    </section>
  );
};

export default CartPopUp;
