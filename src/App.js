import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import NoteState from './Context/notes/NoteState';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <NoteState>
     <Router>
      <Navbar/>
      <Alert message="saad is good"/>
      <div className="container">
      <Routes>
       
      <Route exect path="/" element={ <Home/>} />
      <Route exect path="/Login" element={ <Login/>} />
      <Route exect path="/Signup" element={ <Signup/>} />
      <Route exect path="/about" element={ <About/>} />

      </Routes>

      
      </div>

      </Router>
      </NoteState>
    </>
  );
}

export default App;
