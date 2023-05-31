import { useState } from "react";

/**
 * Challenge: Make button disabled when there is no character on the input 
 * field. Enable the `Submit` button when there is at least one character.
 *  
 * Topics Trained:
 * - State
 * - Conditional Rendering (conditioning in JSX)
 * 
**/
function Exercise2() {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input className="border-solid border-2 border-black mr-4" type="text" onChange={(e) => { setText(e.target.value)

      }} />
      <button className="border-solid border-2 border-black rounded p-2 bg-[#1F2937] text-white disabled:opacity-75" disabled={!text ? true : false}>Submit</button>
    </>
  );
}

export default Exercise2;