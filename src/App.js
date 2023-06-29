import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './Context/notes/NoteState';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <NoteState>
     <Router>
      <Navbar/>
      <div className="container">
      <Routes>
       
      <Route exect path="/" element={ <Home/>} />
      <Route exect path="/about" element={ <About/>} />

      </Routes>

      
      </div>

      </Router>
      </NoteState>
    </>
  );
}

export default App;
