// cart actions

import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

interface props {
   payload: []
}

// action: add items to cart
export function addToCart (payload : props) {
   return {
      type: ADD_TO_CART,
      payload
   };
}

// action: remove items from cart
export function removeFromCart (payload : props) {
   return {
      type: REMOVE_FROM_CART,
      payload
   };
}