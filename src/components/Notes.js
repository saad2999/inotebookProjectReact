import React, { useContext,useEffect } from "react";
import NoteContext from "../Context/notes/noteContext";
import NoteItem from "./Noteitem";
import AddNote from "./AddNote";

function Notes() {
  const noteContext = useContext(NoteContext);
  const { notes,getallNotes } = noteContext;
  useEffect(() => {
    getallNotes()
  },[]);
  return (
    <>
    <AddNote/>
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
