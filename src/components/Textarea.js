// import React, { useState } from "react";

// export default function Textarea(props) {
//   const handleClearClick = () => {
//     let newText = "";
//     setText(newText);
//     props.showAlert("You posted", "bg-pink-500")
//   };

  
//   const handleOnChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleUpperCase = () =>{
//     let newText = text.toUpperCase();
//     setText(newText)
//     props.showAlert("Apply Uppercase", "bg-yellow-400")
//   }

//   const [text, setText] = useState("");

//   return (
//     <div class="px-10 py-5 ">
//       <label
//         for="message"
//         class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
//       >
//         {props.heading}
//       </label>
//       <textarea
//         id="message"
//         rows="4"
//         value={text}
//         onChange={handleOnChange}
//         class={`block p-5 w-11/12 text-base text-gray-800 bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white `}
//         placeholder="Write your thoughts here..."
//       ></textarea>
//       <div class=" px-4 py-4">
//         <button
//           class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
//           onClick={handleClearClick}
//         >
//           Post Comment
//         </button>
        
//         <button
//           class=" mx-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
//           onClick={handleUpperCase}
//         >
//           Change to Uppercase
//         </button>
//       </div>
//       <div>
//         <p>
//           {text.length} words and {text.split("").length} character
//         </p>
//         <p>{0.0008 * text.split("").length} minute</p>
//         <p class="text-5xl">Preview</p>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// }
