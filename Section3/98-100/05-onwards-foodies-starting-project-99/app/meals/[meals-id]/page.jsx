import React from 'react'

function Meal({params, children}) {
    console.log(params)
    console.log(children)
  return (
    <div>
      <h1>Meal:{params['meals-id']}</h1>
    </div>
  )
}

export default Meal
