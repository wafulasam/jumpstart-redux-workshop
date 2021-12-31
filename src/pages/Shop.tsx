import React, { useEffect } from "react";
import { fetchProducts } from "../store/actions/productsActions";
import { useAppStore } from "../store/store";
import { ProductItemProps } from "../components/ProductCard";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const { products, cart } = useAppStore();

  useEffect(() => {
    const { data } = require("../json/products.json");
    fetchProducts(data);
  }, []);

  return (
    <div>
      <h1>Ashley's</h1>
      <p>cart: {cart.length}</p>
      {JSON.stringify(cart)}
      {products.map((product: ProductItemProps) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
export default Shop;
