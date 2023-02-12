import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textarea from './components/Textarea';
import {useState } from 'react';

function App() {
  const [mode , setMode] = useState('bg-slate-50')

  const toggleMode = () =>{
    if(mode === 'bg-slate-50'){
      setMode( "bg-stone-900");
      
    }else{
      setMode("bg-slate-50")
     
    }
  }
  return (
    <>
  <Navbar title = "Blog Page" mode = {mode} toggleMode = {toggleMode}/>
  <Alert/>
  <Textarea heading ="Your message" />
  {/* <About /> */}
  
  
</>
    );
  } 
   
  export default App;

  // proptype and prop default
  
  