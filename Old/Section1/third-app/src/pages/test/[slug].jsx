import TestComp from '@/components/TestComp'
import React from 'react'

function dynamic(props) {
    console.log(props)
  return (
    <div>
      <h1>dynamic</h1>
      <TestComp {...props}/>
    </div>
  )
}

export default dynamic
