import React, { ChangeEvent, useState } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput = ({ addNote }: NewNoteInputProps) => {
  const [note, setNote] = useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const addNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      />
      <button onClick={addNoteClick}>Add note</button>
    </div>
  );
};
