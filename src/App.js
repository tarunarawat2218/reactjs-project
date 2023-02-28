import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Textarea from './components/Textarea';
import About from './components/About';
import Form from './components/Form';
import Edit from './components/Edit';
import Firstpage from './components/Firstpage';
import Posts from './components/Posts';
import {useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

 function App() {
//   const [mode , setMode] = useState('bg-slate-50')
//   const [alert , setAlert] = useState(null)

//   const showAlert = (message,type) => {
//     setAlert({
//       msg:message,
//       type : type
//     })
//     setTimeout(() => {
//       setAlert(null)
//     }, 2000);
//   }

//   const toggleMode = () =>{
//     if(mode === 'bg-slate-50'){
//       setMode( "bg-stone-900")
//       showAlert("Dark mode" , "bg-red-700")
      
//     }else{
//       setMode("bg-slate-50")
//       showAlert("light mode" , "bg-blue-200")
//     }
//   }
  return (
    <>
    <Router>

  <Navbar/>
  <Routes>
          <Route path="/" element={<Firstpage />} />
           
        </Routes>
        
        <Routes>
        <Route path="/Edit" element={<Edit/>} />
        </Routes>  
  <Routes>
          <Route path="/about" element={<About />} />
           
        </Routes>
        <Routes>
          <Route path="/textarea" element={<Textarea />} />
           
        </Routes>
  </Router>
</>
    );
  
  }
  export default App;

  // proptype and prop default
  
  