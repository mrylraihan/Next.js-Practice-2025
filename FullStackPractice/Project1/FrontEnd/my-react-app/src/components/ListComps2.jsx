import React, { useState } from 'react'
import Test4 from './TestComp/Test4'
import TestComp1 from './TestComp/TestComp1'
import TestComp2 from './TestComp/TestComp2'
import TestComp3 from './TestComp/TestComp3'

function ListComps2() {
  const [selectedComp, setSelectedComp] = useState(TestComp1)
  const onSelect = (key) => setSelectedComp(key)

  const listOfComponents = [
    {key: 'Test Comp1', label: 'Test Comp1', Component: TestComp1},
    {key: 'Test Comp2', label: 'Test Comp2', Component: TestComp2},
    {key: 'Test Comp3', label: 'Test Comp3', Component: TestComp3},
    {key: 'Test Comp4', label: 'Test Comp4', Component: Test4}
  ]
  const SelectedComp = selectedComp
  return (
    <div>
      <nav style={{display:'flex', gap:'10px'}}>
        {listOfComponents.map(comp=>{
          return <button key={comp.key} onClick={()=>onSelect(comp.Component)}>{comp.label}</button>
        })}
        <div style={{marginTop:'20px'}}>
          
        </div>
        
      </nav>    
      {SelectedComp}
    </div>
  )
}

export default ListComps2
