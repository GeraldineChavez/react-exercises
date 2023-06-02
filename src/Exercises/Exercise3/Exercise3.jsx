import { useState } from "react";

/** 
 * Challenge: Make this app work like a calculator that can add two numbers.
 * Functionality: When user place numbers on first and second input and hit the
 * button. The sum should appear on the `Total: ` as an output. 
**/
function Exercise3() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);
  // console.log(num1, "num1");
  // console.log(num2, "num2");

  const handleClick = () => {
    // console.log(typeof(num1));
    setTotal(num1+num2);
  }
  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input className="border-solid border-2 border-black mr-4" placeholder="First Number" type="number" onChange={(e) => {setNum1(Number(event.target.value))}} />
      <input className="border-solid border-2 border-black mr-4" placeholder="Second Number" type="number" onChange={(e) => {setNum2(Number(event.target.value))}} />

      <button className="border-solid border-2 border-black rounded p-2 bg-[#1F2937] text-white" onClick={handleClick}>Add Two Numbers</button>
      <p>Total: {total}</p>
    </div>
  );
}

export default Exercise3;