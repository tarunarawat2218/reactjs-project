//rfc(react function component)
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      class={`flex items-center justify-between flex-wrap p-5`}
    >
      <div class="flex items-center flex-shrink-0 text-stone-500 mr-10" style={{fontFamily:"Lily Script One, cursive"}}>
        <span class="font-semibold text-2xl tracking-tight  ">BlogOut</span>
      </div>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-lg lg:flex-grow">
          <Link
            to="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-white mr-4"
          >
            Home
          </Link>
          <Link
            to="/Posts"
            class="block mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-white mr-4"
          >
            Post
          </Link>
          <Link
            to="/About"
            class="block mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-white mr-4"
          >
            About
          </Link>
          <Link
            to="/Textarea"
            class="block mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-white"
          >
            Write
          </Link>
        </div>
        
        
           
          
        </div>
      
    </nav>
  );
}
