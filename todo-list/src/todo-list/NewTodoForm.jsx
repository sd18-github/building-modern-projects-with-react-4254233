"useClient";
import { useDispatch } from "react-redux";
import { createTodo } from "./todoSlice";
import React, { useState } from "react";

export default function NewTodoForm() {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  function onCreate() {
    dispatch(createTodo(inputText));
    setInputText('');
  }

  function onEnterPressed(e) {
    if(e.key === 'Enter') {
      onCreate();
    }
  }
  
  return (
    <div>
      <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} onKeyDown={onEnterPressed}/>
      <button onClick={onCreate}>Create Todo</button>
    </div>
  )
}