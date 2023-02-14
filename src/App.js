import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textarea from './components/Textarea';
import {useState } from 'react';

function App() {
  const [mode , setMode] = useState('bg-slate-50')
  const [alert , setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type : type
    })
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
  <Navbar title = "Blog Page" mode = {mode} toggleMode = {toggleMode}/>
  <Alert alert = {alert}/>
  <Textarea showAlert = {showAlert}  heading ="Your message" />
  {/* <About /> */}
  
  
</>
    );
  } 
   
  export default App;

  // proptype and prop default
  
  