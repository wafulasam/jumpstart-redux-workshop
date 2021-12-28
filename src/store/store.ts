// store

import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { rootReducer } from "./reducers";

// create store
const store = configureStore(rootReducer);

// data bank
export const useAppStore = () => {
   const products = useSelector((state) => state.products);
   return { products, };
};

export default store;