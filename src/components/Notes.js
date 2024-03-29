import React, { useContext,useEffect,useRef ,useState} from "react";
import NoteContext from "../Context/notes/noteContext";
import NoteItem from "./Noteitem";
import AddNote from "./AddNote";
import {useNavigate} from 'react-router-dom';



function Notes(props) {
  const noteContext = useContext(NoteContext);

  const { notes,getallNotes,editNote } = noteContext;
  let navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      getallNotes()
    }
    else
    {
      navigate('/Login')
    }
   
    // eslint-disable-next-line
  },[]);
  const [note ,setNote]=useState({id:"", etitle:"",edescription:"",etag:"default"})
   const updatenNote=(currentnote)=>{
    ref.current.click()
    setNote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag})
   

   }
   const ref=useRef(null)
   const refClose=useRef(null)

   let onClickHandler=(e) => {
    e.preventDefault()
    editNote(note.id,note.etitle,note.edescription)
    
    refClose.current.click()
    props.showAlert("updated successfully","success")
    
    
}
const onChange=(e) =>{
    setNote({...note,[e.target.name]:e.target.value})
}
  return (
    <>
    
<button type="button" className="d-none btn btn-primary" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
          <div className="mb-3">
            <label htmlFor="Etitle" className="form-label"> title </label>
            <input type="text" className="form-control" id="etitle"name="etitle" aria-describedby="emailHelp"onChange={onChange}value={note.etitle} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="edescription" className="form-label"> description</label>
            <input type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} value={note.edescription } minLength={5} required />
          </div>
          <div className="mb-3">
            <label htmlFor="etag" className="form-label"> tag</label>
            <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag} />
          </div>

          
        </form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.edescription.length<5||note.etitle.length <5} onClick={onClickHandler} type="button" className="btn btn-primary"> Update Note</button>
      </div>
    </div>
  </div>
</div>

    <AddNote showAlert={props.showAlert}/>
    <h1>your  Notes</h1>
    <div className="row my-3">
      <div className="container">
        {notes.length===0&&"No Notes to display"}
      </div>
    
    
      {notes.map((note) => {
        return <NoteItem showAlert={props.showAlert} updatenNote={updatenNote} key={note._id} note={note}/>
      })}
    </div>
    </>
  );
}

export default Notes;
