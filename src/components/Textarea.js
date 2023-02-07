import React, {useState} from 'react'



export default function Textarea(props) {
  const handleClearClick = () =>{
    let newText = "";
    setText(newText);
  }

  const handleChangeWriting = () =>{
    let newText = text.setFontFamily.cursive();
    setText(newText);
  }

  const handleOnChange = (event)=> {
    setText(event.target.value)
    }

const [text, setText] = useState("");

  return (
    <div class="px-10 py-5">
    <label for="message"  class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">{props.heading}</label>
    <textarea id="message" rows="4" value = {text} onChange ={handleOnChange} class="block p-5 w-11/12 text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder='Write your thoughts here...'></textarea>
    <div class= " px-4 py-4">
    <button  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleClearClick}>
  Post Comment
</button>
<button class=" mx-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleChangeWriting}>
  Change writing
</button>
</div>
<div>
  <p>{text.length} words and {text.split("").length} character</p>
  <p>{0.0008* text.split("").length} minute</p>
  <p class= "text-5xl" >Preview</p>
  <p>{text}</p>
</div>
    </div>
  )
  }
