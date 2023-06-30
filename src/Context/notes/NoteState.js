import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    
    const Intialnotes=[
        {
          "_id": "649b18e34c9a068003092950e",
          "user": "649b1851c9a0680030929508",
          "title": "my note22",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-27T17:14:12.760Z",
          "__v": 0
        },
        {
          "_id": "649d5161cae6c67fbf310cec6",
          "user": "649b1851c9a0680030929508",
          "title": "my note223",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-29T09:39:56.363Z",
          "__v": 0
        },
        {
          "_id": "649b138e4c9a068003092950e",
          "user": "649b1851c9a0680030929508",
          "title": "my note22",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-27T17:14:12.760Z",
          "__v": 0
        },
        {
          "_id": "649d516cae6c67fbf310cec60",
          "user": "649b1851c9a0680030929508",
          "title": "my note223",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-29T09:39:56.363Z",
          "__v": 0
        },
        {
          "_id": "649b18e4c9a068003092950e1",
          "user": "649b1851c9a0680030929508",
          "title": "my note22",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-27T17:14:12.760Z",
          "__v": 0
        },
        {
          "_id": "649d516cae6c67fbf310cec62",
          "user": "649b1851c9a0680030929508",
          "title": "my note223",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-29T09:39:56.363Z",
          "__v": 0
        },
        {
          "_id": "649b18e4c9a068003092950e7",
          "user": "649b1851c9a0680030929508",
          "title": "my note22",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-27T17:14:12.760Z",
          "__v": 0
        },
        {
          "_id": "649d516cae6c67fbf310cec655",
          "user": "649b1851c9a0680030929508",
          "title": "my note223",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-29T09:39:56.363Z",
          "__v": 0
        },
        {
          "_id": "649b18e4c9a068003092950e44",
          "user": "649b1851c9a0680030929508",
          "title": "my note22",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-27T17:14:12.760Z",
          "__v": 0
        },
        {
          "_id": "649d516cae6c67fbf310cec6112",
          "user": "649b1851c9a0680030929508",
          "title": "my note223",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-29T09:39:56.363Z",
          "__v": 0
        },
    ]
    const addNote = (title,description,tag) => {
      const note= {
        "_id": "649daa516cae6c67fbf310cec6112",
        "user": "649b1851c9a0680030929508",
        "title": title,
        "description": description,
        "tag": tag,
        "Date": "2023-06-29T09:39:56.363Z",
        "__v": 0
      }
      setNotes(notes.concat(note))
      console.log(note) 
    }
    const editNote = () => {

    }
    const deleteNote = (id) => {
      console.log("deleting note with "+id)
      const newNotes=notes.filter((note) => {return note._id!==id})
      setNotes(newNotes)

    }
    const [notes,setNotes]=useState(Intialnotes)
    
    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
        {props.children}        
        </NoteContext.Provider>
    )
}
export default NoteState;