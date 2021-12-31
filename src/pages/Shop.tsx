import React, { useEffect } from "react";
import { fetchProducts } from "../store/actions/productsActions";
import { useAppStore } from "../store/store";
import { ProductItemsProps } from "../types";
import ProductCard from "../components/ProductCard";
import { getTotalCartQuantity } from "../utilities";

const Shop = () => {
  const { products, cart } = useAppStore();

  useEffect(() => {
    const { data } = require("../json/products.json");
    fetchProducts(data);
  }, []);

  return (
    <div>
      <h1>Ashley's</h1>
      <p>cart: {getTotalCartQuantity(cart)}</p>
      {JSON.stringify(cart)}
      {products.map((product: ProductItemsProps) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
export default Shop;
