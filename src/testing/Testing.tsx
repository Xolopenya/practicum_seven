import React from 'react';
import Navbar from "../components/Navbar";
import Quiz from "./features/Quiz"; 

function Testing() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar active="4" />
      
      <Quiz /> 
      
    </div>
  );
}

export default Testing;