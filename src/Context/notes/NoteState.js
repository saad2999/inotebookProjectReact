import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    
    const Intialnotes=[
        {
          "_id": "649b18e4c9a068003092950e",
          "user": "649b1851c9a0680030929508",
          "title": "my note22",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-27T17:14:12.760Z",
          "__v": 0
        },
        {
          "_id": "649d516cae6c67fbf310cec6",
          "user": "649b1851c9a0680030929508",
          "title": "my note223",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-29T09:39:56.363Z",
          "__v": 0
        },
        {
          "_id": "649b18e4c9a068003092950e",
          "user": "649b1851c9a0680030929508",
          "title": "my note22",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-27T17:14:12.760Z",
          "__v": 0
        },
        {
          "_id": "649d516cae6c67fbf310cec6",
          "user": "649b1851c9a0680030929508",
          "title": "my note223",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-29T09:39:56.363Z",
          "__v": 0
        },
        {
          "_id": "649b18e4c9a068003092950e",
          "user": "649b1851c9a0680030929508",
          "title": "my note22",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-27T17:14:12.760Z",
          "__v": 0
        },
        {
          "_id": "649d516cae6c67fbf310cec6",
          "user": "649b1851c9a0680030929508",
          "title": "my note223",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-29T09:39:56.363Z",
          "__v": 0
        },
        {
          "_id": "649b18e4c9a068003092950e",
          "user": "649b1851c9a0680030929508",
          "title": "my note22",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-27T17:14:12.760Z",
          "__v": 0
        },
        {
          "_id": "649d516cae6c67fbf310cec6",
          "user": "649b1851c9a0680030929508",
          "title": "my note223",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-29T09:39:56.363Z",
          "__v": 0
        },
        {
          "_id": "649b18e4c9a068003092950e",
          "user": "649b1851c9a0680030929508",
          "title": "my note22",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-27T17:14:12.760Z",
          "__v": 0
        },
        {
          "_id": "649d516cae6c67fbf310cec6",
          "user": "649b1851c9a0680030929508",
          "title": "my note223",
          "description": "please do your work on time22",
          "tag": "General",
          "Date": "2023-06-29T09:39:56.363Z",
          "__v": 0
        },
    ]
    const [notes,setNotes]=useState(Intialnotes)
    
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}        
        </NoteContext.Provider>
    )
}
export default NoteState;