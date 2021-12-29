// cart actions
import { store } from "../store";

export const addToCart = (product: {}) => {
   store.dispatch({type: "ADD_TO_CART", payload: product})
};