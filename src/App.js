import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import NoteState from './Context/notes/NoteState';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState} from 'react'

function App() {
  const [alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      type:type,
      message:message
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  return (
    <>
    
    <NoteState>
     <Router>
      <Navbar/>
      <Alert alert={alert}/>
              
      <div className="container">
      <Routes>
       
      <Route exect path="/" element={ <Home showAlert={showAlert}/>} />
    
      <Route exect path="/Login" element={ <Login showAlert={showAlert} />} />
      <Route exect path="/Signup" element={ <Signup showAlert={showAlert}/>} />
      <Route exect path="/about" element={ <About/>} />

      </Routes>

      
      </div>

      </Router>
      </NoteState>
    </>
  );
}

export default App;
