import React, { useState } from "react";

export default function Textarea(props) {
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    
  };

//   const handleOnChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleUpperCase = () => {
//     let newText = text.toUpperCase();
//     setText(newText);
//     props.showAlert("Apply Uppercase", "bg-yellow-400");
//   };

  const [text, setText] = useState("");

  return (
    <>
    <div class="my-5 mx-5">
    <img
        src="/secondphoto (2).jpg"
        alt="Sunset in the mountain"
        className="rounded  h-auto w-3/4 mx-20"
      />
      <div className="px-10 py-5 mx-12 my-5">
        <label htmlFor="fileInput">
        <i class="fa fa-plus-square-o fa-2x" aria-hidden="true"></i>
        </label>
        
           <input className="" type="file" id="fileInput" style={{ display: "none" }} /> 
          <input  class="mx-4 text-3xl" type="text" placeholder="Title" autoFocus="true" />
        
      </div>
      <div class="px-10 mx-20">
        
        <textarea
          id="message"
          rows="4"
          
        //   onChange={handleOnChange}
          class=" overflow-hidden  w-11/12 text-lg text-gray-800 focus:outline-none  dark:placeholder-gray-400 dark:text-white"
          placeholder="Write your thoughts here..."
        ></textarea>
        <div class=" px-5 py-4">
          <button
            class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClearClick}
          >
            Publish
          </button>

          {/* <button
          class=" mx-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleUpperCase}
        >
          Change to Uppercase
        </button> */}
        </div>
        {/* <div>
        <p>
          {text.length} words and {text.split("").length} character
        </p>
        <p>{0.0008 * text.split("").length} minute</p>
        <p class="text-5xl">Preview</p>
        <p>{text}</p>
      </div> */}
      </div>
      </div>
    </>
  );
}
