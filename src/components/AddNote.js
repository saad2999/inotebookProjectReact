import React, { useContext, useState } from "react";
import NoteContext from "../Context/notes/noteContext";


const AddNote = (props) => {
    const [note ,setNote]=useState({title:"",description:"",tag:"default"})
    let onClickHandler=(e) => {
        e.preventDefault()
        addNote(note.title,note.description,note.tags)
        setNote(({title:"",description:"",tag:""}))
        props.showAlert("Added successfully","success")

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
            <input type="text" className="form-control" id="title"name="title" aria-describedby="emailHelp"onChange={onChange} minLength={5} required value={note.title}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label"> description</label>
            <input type="text" className="form-control" id="description" name="description" onChange={onChange} minLength={5} required value={note.description} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label"> tag</label>
            <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}  value={note.tag}/>
          </div>

          <button disabled={note.description.length<5||note.title.length <5} type="submit" className="btn btn-primary" onClick={onClickHandler}> Add Note </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
