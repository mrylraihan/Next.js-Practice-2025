import React, { useState } from 'react'
import TestComp1 from './TestComp/TestComp1'
import TestComp2 from './TestComp/TestComp2'
import TestComp3 from './TestComp/TestComp3'
import Test4 from './TestComp/Test4'

function ListComps3() {
  const [selectedComp, setSelectedComp] = useState("Test Comp 1")
  const onSelect = (e) => setSelectedComp(e.target.getAttribute('name')) 
  console.log(selectedComp)

  return (
    <div>
      <ul>
        <li onClick={onSelect} name="Test Comp 1">Test Comp 1</li>
        <li onClick={onSelect} name="Test Comp 2">Test Comp 2</li>
        <li onClick={onSelect} name="Test Comp 3">Test Comp 3</li>
        <li onClick={onSelect} name="Test4">Test Comp 4</li>
      </ul>
      {selectedComp === "Test Comp 1" && <TestComp1 />}
      {selectedComp === "Test Comp 2" && <TestComp2 />}
      {selectedComp === "Test Comp 3" && <TestComp3 />}
      {selectedComp === "Test Comp 4" && <Test4 />}
    </div>
  )
}


export default ListComps3



//   const listOfComponents = [
//     {id: 1, name: 'Test Comp 1', Component:TestComp1},
//     {id: 2, name: 'Test Comp 2', Component:TestComp2},
//     {id: 3, name: 'Test Comp 3', Component:TestComp3},
//     {id: 4, name: 'Test Comp 4', Component:Test4}
//   ]

// function ListComps3() {
//   const [selectedComps, setSelectedComps] = useState(listOfComponents[0].Component)
//   const handleClick = e => setSelectedComps(listOfComponents[parseInt(e.target.getAttribute('idx'))].Component)

//   return (
//     <div>
//       <ul>
//         {listOfComponents.map((comp, idx)=><li key={comp.id} onClick={handleClick} idx={idx}>{comp.name}</li>)}
//       </ul>
//       <div>
//         {selectedComps}
//       </div>
//     </div>
//   )
// }

// export default ListComps3
