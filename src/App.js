import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textarea from './components/Textarea';
import About from './components/About';
import Firstpage from './components/Firstpage';
import {useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('bg-slate-50')
  const [alert , setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'bg-slate-50'){
      setMode( "bg-stone-900")
      showAlert("Dark mode" , "bg-red-700")
      
    }else{
      setMode("bg-slate-50")
      showAlert("light mode" , "bg-blue-200")
    }
  }
  return (
    <>
    <Router>
    <Route path="/" element={<Firstpage />} />
  <Navbar title = "Blog Page" mode = {mode} toggleMode = {toggleMode}/>
  <Alert alert = {alert}/>
  <Routes>
          <Route path="/about" element={<About />} />
          {/* <Route path="/" element={<Textarea/>}  showAlert = {showAlert}  heading ="Your message"/> */}
        </Routes>
  </Router>
  {/* <Textarea showAlert = {showAlert}  heading ="Your message" /> */}
  
  
</>
    );
  } 
   
  export default App;

  // proptype and prop default
  
  