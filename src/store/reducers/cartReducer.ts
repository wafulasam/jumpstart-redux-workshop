// cart reducer
import { CartState } from "../../types";
import _ from "lodash";

const initialState: any = {
   cart: []
}

type Action = { type: "ADD_TO_CART" | "REMOVE_FROM_CART", payload:any }

export const cartReducer = (state: CartState = initialState, action: Action) => {
   switch(action.type){
      case "ADD_TO_CART": {
         let existingCartItem:any = {};

         state.cart.filter((cartItem:any) => cartItem.id === action.payload.id ? existingCartItem = cartItem : null);
         
         const newCartState = _.pull(state.cart, existingCartItem);

         
         if(action.payload.id === existingCartItem.id) {
            const newActionPayload = {
               "id": existingCartItem.id,
               "name": existingCartItem.name,
               "quantity": existingCartItem.quantity +1
            }
            return {...state, cart: [...newCartState, {...newActionPayload}]}
         } else {
            return {...state, cart: [...state.cart, {...action.payload, ...{"quantity": 1}}]};
         }
         
      }
      case "REMOVE_FROM_CART": {
         let cartItemToBeRemoved:any = {};
         state.cart.filter((cartItem:any) => cartItem.id === action.payload.id ? cartItemToBeRemoved = cartItem : null);
         const newCartState = _.pull(state.cart, cartItemToBeRemoved);
         return {...state, cart: [...newCartState]}
      }
      default:
         return state;
   }
}