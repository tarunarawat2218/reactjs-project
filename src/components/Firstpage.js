import React from 'react'
import { Link } from "react-router-dom";

export default function Firstpage() {
  return (
    <div>
    <img src="/firstpage.jpg" alt="image" style={{height:"40rem"}} />
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  <Link to="/">Button</Link> 
</button>
    </div>
  )
}
