import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import {useState } from 'react';

function App() {
  const [mode , setMode] = useState('bg-pink-500')
  return (
    <>
  <Navbar title = "Blog Page" mode = {mode}/>
  <Textarea heading ="Your message" />
  {/* <About /> */}
  
  
</>
    );
  } 
   
  export default App;

  // proptype and prop default
  
  