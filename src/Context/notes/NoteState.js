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
    console.log(json)
    setNotes(json)
    
    }
    const addNote = async (title,description,tag) => {
      const note= {
        "_id": "649daa516cae6c67fbf310cec6112",
        "user": "649b1851c9a0680030929508",
        "title": title,
        "description": description,
        "tag": tag,
        "Date": "2023-06-29T09:39:56.363Z",
        "__v": 0
      }
      const response = await fetch(`${host}/api/notes/addnote`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5OWQyZDU0NGY2NjY3YTIwZjE0MjAwIn0sImlhdCI6MTY4NzgwMjU4MX0.4tpAT_zhGrIOTxGI1MTSGBJDzH2gCuTe3H5_szqLBmA"
        },
        body: JSON.stringify({ title, description, tag})
      })
      const json = response.json()
      setNotes(notes.concat(note))
      console.log(note) 
    }
    const editNote =  async (id,title,description,tag) => {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5OWQyZDU0NGY2NjY3YTIwZjE0MjAwIn0sImlhdCI6MTY4NzgwMjU4MX0.4tpAT_zhGrIOTxGI1MTSGBJDzH2gCuTe3H5_szqLBmA"
        },
        body: JSON.stringify({ title, description, tag})
      })
      const json = response.json()
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id === id) {
          element.title=title;
          element.description=description;
          element.tag=tag;
          
          
        }
        
      }

    }
    const deleteNote = async (id) => {
      console.log("deleting note with "+id)
      const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5OWQyZDU0NGY2NjY3YTIwZjE0MjAwIn0sImlhdCI6MTY4NzgwMjU4MX0.4tpAT_zhGrIOTxGI1MTSGBJDzH2gCuTe3H5_szqLBmA"
        },
        
      })
      const json =await response.json()
      console.log(json)
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