import React from "react";
import { NewNoteInput } from "../components/NewNoteInput";
import { useAppStore } from "../store/store";
import { useDispatch } from "react-redux";

const Notes = () => {
  const { notes } = useAppStore();

  // dispatch add note action
  const dispatch = useDispatch();
  const addNote = (note: string) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  return (
    <>
      <NewNoteInput addNote={addNote} />
      <hr />
      <ul>
        {notes.map((note: string) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </>
  );
};

export default Notes;
