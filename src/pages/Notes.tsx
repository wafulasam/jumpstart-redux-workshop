import React from "react";
import { NewNoteInput } from "../components/NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "../store/reducers/notesReducer";

const Notes = () => {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();
  const addNote = (note: string) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  return (
    <>
      <NewNoteInput addNote={addNote} />
      <hr />
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </>
  );
};

export default Notes;
