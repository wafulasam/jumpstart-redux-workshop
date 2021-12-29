import React from "react";
import { NewNoteInput } from "../components/NewNoteInput";
import { useAppStore } from "../store/store";
import { addNote } from "../store/actions/notesActions";

const Notes = () => {
  const { notes } = useAppStore();

  return (
    <>
      <h1>Notes</h1>
      <NewNoteInput addNote={addNote} />
      <ul>
        {notes.map((note: string) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </>
  );
};

export default Notes;
