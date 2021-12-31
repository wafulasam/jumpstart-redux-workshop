import { ProductItemsProps } from "../types";

// get all prices
export function getTotalCartQuantity (items:[]) {
   const count = items.map((item:ProductItemsProps) => item.quantity)
   const total = count.reduce((a, b) => a + b, 0);
   return total;
}