import React, { useContext } from "react";

import NoteContext from "../Context/notes/noteContext";


const NoteItem = (props) => {

    const noteContext = useContext(NoteContext);
    const { deleteNote } = noteContext;
    const { note, updatenNote} = props
    
    return (
        <div className='col-md-3 mx-2'>
            
            
            <div className="card my-3" style={{width: "18rem"}}>
                
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className='far fa-trash-alt mx-2'onClick={()=>{deleteNote(note._id); props.showAlert("deleted successfully","success")}}></i>
                        <i className='far fa-edit mx-2'onClick={()=>{updatenNote(note)}}></i>
                        </div>
                       
                       
                        <p className="card-text">{note.description}</p>
                        
                    </div>
            </div>
        </div>
    )
}

export default NoteItem
