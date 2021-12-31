import { ProductItemProps } from "../components/ProductCard"

// get all prices
export function getTotalCartQuantity (items:[]) {
   const count = items.map((item:ProductItemProps) => item.quantity)
   const total = count.reduce((a, b) => a + b, 0);
   return total
}