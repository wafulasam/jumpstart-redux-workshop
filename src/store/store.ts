import { createStore } from "redux";
import { useSelector } from "react-redux";
import { rootReducer } from "./reducers";
// import { NotesState } from "./reducers/notesReducer";

// store
export const store = createStore(rootReducer);

// app store 
// data can be accessed from anywhere in the app by just calling " useAppStore() "
// example: const { notes, cart } = useAppStore();
export const useAppStore = () => {
   // const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes);
   const notes = useSelector((state:any) => state.notesReducer.notes);
   
   return {
      notes,
   }
}