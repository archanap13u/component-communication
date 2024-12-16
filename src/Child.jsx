import React from 'react'
import { useState } from 'react';

function Child({ updateParentMessage }) {
    const [childInput, setChildInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        updateParentMessage(childInput);
        setChildInput(""); 
      };
  return (
    <>
    <div className='border p-4 border-3 border-dark shadow'>
      <h2>Child Component</h2>
      <h5>Update contact</h5>
      <form onSubmit={handleSubmit} className='d-flex flex-column'>
        <input
          type="text"
          placeholder="new name "
          value={childInput}
          onChange={(e) => setChildInput(e.target.value)}
         className='p-3 mb-3'
        />
        <button type="submit" className='btn btn-success'>
          change
        </button>
      </form> 
    </div>
    </>
  )
}

export default Child