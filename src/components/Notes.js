import React, { useContext } from "react";
import NoteContext from "../Context/notes/noteContext";
import NoteItem from "./Noteitem";

function Notes() {
  const noteContext = useContext(NoteContext);
  const { notes, setNotes } = noteContext;
  return (
    <>
    <h1>your  Notes</h1>
    <div className="row my-3">
    
    
    
      {notes.map((note) => {
        return <NoteItem key={note._id} note={note}/>
      })}
    </div>
    </>
  );
}

export default Notes;
