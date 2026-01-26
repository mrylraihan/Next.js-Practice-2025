import React from 'react'

function layout({children}) {
  return (
    <div style={{border:"solid red 1px"}}>
      <h1>Meals Layout</h1>
      <div>
        {children}
      </div>
    </div>
  )
}

export default layout
