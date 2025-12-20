import React from 'react'

function Test2(props) {
  return (
    <div>
      <h1>Test 2</h1>
      <button onClick={()=>{
        props.setToggle(!props.toggle)
      }}>toggle</button>
    </div>
  )
}

export default Test2
