import React from "react";
import { ProductProps } from "../types";
import { addToCart, removeFromCart } from "../store/actions/cartActions";

const ProductCard = ({ product }: ProductProps) => {
  const addToCartClick = () => {
    addToCart(product);
  };
  const removeFromCartClick = () => {
    removeFromCart(product);
  };

  return (
    <div>
      <p>{product.name}</p>
      <button onClick={addToCartClick}>add to cart</button>
      <button onClick={removeFromCartClick}>remove from cart</button>
    </div>
  );
};
export default ProductCard;
