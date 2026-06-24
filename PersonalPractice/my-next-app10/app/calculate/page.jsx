"use client"
import React, { useReducer } from 'react'

const caluclateFn = (prev, action)=>{
    if(action.type === "+"){
        return {sum: prev.sum + 1}
    }else if(action.type === "-"){
        return { sum: prev.sum - 1 }
    }

}

function CalculatePage() {
    const [state, dispatch]= useReducer(caluclateFn,{sum: 0})
    const minus = ()=>dispatch({type:"-"})
    const add = ()=>dispatch({type:"+"})
    console.log(state)
  return (
    <div>
      <button onClick={add}>
        +
      </button>
    {state.sum}
      <button onClick={minus}>
        -
      </button>
    </div>
  )
}

export default CalculatePage
