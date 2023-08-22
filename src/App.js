import React from 'react'
import './Attend.css';
function App() {
  return (
    <>
      <div className='container'>
        <div className='main'>
          <h1 className='to-do-text'>To Do List</h1>
          <input className='input-box' placeholder="Add new Task" ></input> &nbsp;&nbsp;
          <button className='btn-add'> + </button>
          <ul>
            <li>Create good UI</li>
            <li>Enable add task</li>
            <li>Enable remove task</li>
            <li>Enable task complete</li>
            <li>acet-attendance</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App