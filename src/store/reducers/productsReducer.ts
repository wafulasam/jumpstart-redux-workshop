// products reducer
import { ProductsState } from "../../types";

const initialState = {
   products: []
}

type Action = { type: "FETCH_PRODUCTS", payload: [] };

export const productsReducer = (state: ProductsState = initialState, action: Action) => {
   switch(action.type){
      case "FETCH_PRODUCTS": {
         return {...state, products: [...state.products, action.payload]};
      }
      default:
         return state;
   }
};