import { useState } from "react";
import {TodoInputProps} from './TodoTypes'

export const TodoInput = ({ addItem }: TodoInputProps) => {
  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  const keyPress = (e: any) => {
    if (e.key === "Enter") {
      addItem(text);
      setText('');
    }
  };

  return (
    <div className="w-full">
      <input
        placeholder="Please enter todo text"
        value={text}
        onChange={(e) => handleChange(e)}
        onKeyDown={keyPress}
        className="w-3/4 border-2 border-solid border-black-700 px-2 py-1 rounded shadow-md"
      ></input>
      <button
        onClick={() => {addItem(text); setText('');}}
        className="w-auto bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 shadow-lg shadow-cyan-500/50 px-2 py-1 ml-2 rounded text-white"
      >
        ADD
      </button>
    </div>
  );
};
