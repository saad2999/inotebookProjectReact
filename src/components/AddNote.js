import React, { useContext, useState } from "react";
import NoteContext from "../Context/notes/noteContext";


const AddNote = () => {
    const [note ,setNote]=useState({title:"",description:"",tag:"default"})
    let onClickHandler=(e) => {
        e.preventDefault()
        addNote(note.title,note.description,note.tags)
    }
    const onChange=(e) =>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    const noteContext = useContext(NoteContext);
  const { addNote } = noteContext;
  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label"> title </label>
            <input type="text" className="form-control" id="title"name="title" aria-describedby="emailHelp"onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label"> description</label>
            <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
          </div>

          <button type="submit" className="btn btn-primary" onClick={onClickHandler}> Add Note </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
