import React from "react";
import { addToCart } from "../store/actions/cartActions";

export interface ProductItemProps {
  id: number;
  name: string;
}
interface ProductProps {
  product: ProductItemProps;
}

const ProductCard = ({ product }: ProductProps) => {
  const addToCartClick = () => {
    addToCart(product);
  };

  return (
    <div>
      <p>{product.name}</p>
      <button onClick={addToCartClick}>add to cart</button>
    </div>
  );
};
export default ProductCard;
