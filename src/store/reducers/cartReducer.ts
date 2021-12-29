// cart reducer

export interface CartState {
   cart: string []
}

const initialState = {
   cart: []
}

type Action = { type: "ADD_TO_CART", payload: {} }

export const cartReducer = (state: CartState = initialState, action: Action) => {
   switch(action.type){
      case "ADD_TO_CART": {
         return {...state, cart: [...state.cart, action.payload]};
      }
      default:
         return state;
   }
}