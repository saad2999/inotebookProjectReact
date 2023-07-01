import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const host ="http://localhost:5000"
    const Intialnotes=[]
    const getallNotes= async() =>{
      
    const response = await fetch(`${host}/api/notes/getallnotes`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5OWQyZDU0NGY2NjY3YTIwZjE0MjAwIn0sImlhdCI6MTY4NzgwMjU4MX0.4tpAT_zhGrIOTxGI1MTSGBJDzH2gCuTe3H5_szqLBmA"
      },
      
    })
    const json = await response.json()
   
    setNotes(json)
    
    }
    const addNote = async (title,description,tag) => {
      
      const response = await fetch(`${host}/api/notes/addnote`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5OWQyZDU0NGY2NjY3YTIwZjE0MjAwIn0sImlhdCI6MTY4NzgwMjU4MX0.4tpAT_zhGrIOTxGI1MTSGBJDzH2gCuTe3H5_szqLBmA"
        },
        body: JSON.stringify({ title, description, tag})
      })
      const note = await response.json()
      setNotes(notes.concat(note))
      
    }
    const editNote =  async (id,title,description,tag) => {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5OWQyZDU0NGY2NjY3YTIwZjE0MjAwIn0sImlhdCI6MTY4NzgwMjU4MX0.4tpAT_zhGrIOTxGI1MTSGBJDzH2gCuTe3H5_szqLBmA"
        },
        body: JSON.stringify({ title, description, tag})
      })
      const json = response.json()
      const newnotes=JSON.parse(JSON.stringify(notes))
      for (let index = 0; index < newnotes.length; index++) {
        const element = newnotes[index];
        if (element._id === id) {
          newnotes[index].title=title;
          newnotes[index].description=description;
          newnotes[index].tag=tag;
          break;
          
          
        }
        
      }
      setNotes(newnotes)

    }
    const deleteNote = async (id) => {
     
      const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5OWQyZDU0NGY2NjY3YTIwZjE0MjAwIn0sImlhdCI6MTY4NzgwMjU4MX0.4tpAT_zhGrIOTxGI1MTSGBJDzH2gCuTe3H5_szqLBmA"
        },
        
      })
      const json =await response.json()
      
      const newNotes=notes.filter((note) => {return note._id!==id})
      setNotes(newNotes)

    }
    const [notes,setNotes]=useState(Intialnotes)
    
    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote, getallNotes}}>
        {props.children}        
        </NoteContext.Provider>
    )
}
export default NoteState;