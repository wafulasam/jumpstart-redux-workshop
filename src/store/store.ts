import { createStore } from "redux";
import { useSelector } from "react-redux";
import { rootReducer } from "./reducers";
// import { NotesState } from "./reducers/notesReducer";

export const store = createStore(rootReducer);

export const useAppStore = () => {
   // const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes);
   const notes = useSelector((state:any) => state.notesReducer.notes);

   return {
      notes,
   }
}