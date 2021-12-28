// notes actions
import { store } from "../store";

export const addNote = (note: string) => {
  store.dispatch({ type: "ADD_NOTE", payload: note });
};