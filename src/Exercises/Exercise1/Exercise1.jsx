/**
 * Create a form to get the user information. 
 * You will only have to create the inputs and once the user click a button,
 * you should console.log the form values. 
 * 
 * Fields:
 * Name, Age, Email, Profession
 * 
 * Topics Trained:
 * - Event handlers
 * - State
 * - Two way data binding
 */
import React, { useState } from 'react';

export const Exercise1 = () => {

  const [person, setPerson] = useState("");
  // console.log(person);

  const handleChange = (e) => {
    setPerson({...person, [e.target.name]: e.target.value});
  }

  const showInfo = (e) => {
    console.log(person);
    e.preventDefault();
    setPerson("");
  }

  return (
    <div>
      <form onSubmit={showInfo}>
        <label className="mr-5">Name: 
          <input className="border-solid border-2 border-black ml-2 " type="text" name="name" value={[person.name]} onChange={handleChange}/>
        </label>

        <label className="mr-5">Age: 
          <input className="border-solid border-2 border-black ml-2" type="number" name="age" value={[person.age]} onChange={handleChange}/>
        </label>

        <label className="mr-5">Email: 
          <input className="border-solid border-2 border-black ml-2" type="email" name="email" value={[person.email]} onChange={handleChange}/>
        </label>

        <label className="mr-5">Profession: 
          <input className="border-solid border-2 border-black ml-2" type="text" name="profession" value={[person.profession]} onChange={handleChange}/>
        </label>

        <button className="rounded border-solid border-2 p-2 bg-[#1F2937] text-white" type="submit">Submit</button>
      </form>
    </div>
  );

}