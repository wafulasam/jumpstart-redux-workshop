// cart reducer

import { ADD_TO_CART, REMOVE_FROM_CART }  from "../actions/actionTypes";

interface PropTypes {
   state: any,
   action: () => void,
}

// reducer: add and remove from cart
export const cartReducer = ({ state, action } : PropTypes) => {
   switch (action.type) {
      case ADD_TO_CART:
         return [...state, {...action.payload}];
      case REMOVE_FROM_CART:
         return state.map((item) => item.id === action.payload ? state.delete(item) : state);
      default:
         return state;
   }
}