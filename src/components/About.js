import React,{useEffect, useContext} from 'react'
import noteContext from '../Context/notes/noteContext'

function About() {
  useEffect(() => {
    a.update()
  },[])
  const a =useContext(noteContext)
  return (
    <div>
      this is about  {a.state.name}
    </div>
  )
}

export default About
