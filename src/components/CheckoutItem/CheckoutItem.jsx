import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

import "./CheckoutItem.scss";

const CheckoutItem = ({ item }) => {
  const { name, price, quantity, image } = item;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(item);

  const removeItemHandler = () => removeItemFromCart(item);

  const clearItemHandler = () => clearItemFromCart(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow">
          <span onClick={removeItemHandler}>&#10094;</span>
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow">
          <span onClick={addItemHandler}>&#10095;</span>
        </div>
      </span>
      <span className="price">{price}</span>

      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
