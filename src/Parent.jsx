import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Child from './Child';

function Parent() {
    const [message, setMessage] = useState("Archana");

    const updateMessage = (newMessage) => {
      setMessage(newMessage);
    }

  return (
    <>
    <div  className='d-flex justify-content-center align-items-center  '  style={{height:'100vh',width:'700px'}} >

  
      <div className='  h-50' style={{textAlign:'center'}} >
      <h1>Parent Component</h1>
      <p className='text-dark'>Contactname: {message}</p>
      {/* Pass the callback as a prop to the child */}
      <Child updateParentMessage={updateMessage} />
    </div>
    </div>
    </>
  )
}

export default Parent