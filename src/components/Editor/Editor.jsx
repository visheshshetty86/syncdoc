import {useState} from "react";

export default function Editor() {
    const [text, setText] = useState("");

  return (
    <div className = "flex justify-center items-center bg-gray-100 min-h-screen overflow-y-auto">
        <div className = "  w-a4 h-a4 border border-gray-300 ">
        <textarea
        value = {text}
        onChange = {(e) => setText(e.target.value)}
        className = "w-full h-full resize-none outline-none p-2"
        />
        </div>
    </div>
  );
}