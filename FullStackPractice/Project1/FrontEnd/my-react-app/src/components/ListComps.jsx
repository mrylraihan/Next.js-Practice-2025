import React, { useState, lazy, Suspense, memo, useCallback } from 'react'
import Test4 from './TestComp/Test4'
const TestComp1 = lazy(() => import('./TestComp/TestComp1'))
const TestComp2 = lazy(() => import('./TestComp/TestComp2'))
const TestComp3 = lazy(() => import('./TestComp/TestComp3'))
// const Test4 = lazy(() => import('./TestComp/Test4'))
const COMPONENTS = [
  { key: 'Test Comp1', label: 'Test Comp1', Component: TestComp1 },
  { key: 'Test Comp2', label: 'Test Comp2', Component: TestComp2 },
  { key: 'Test Comp3', label: 'Test Comp3', Component: TestComp3 },
]

function ListComps() {
  const [selectedComp, setSelectedComp] = useState('Test Comp1')

  const onSelect = useCallback((key) => setSelectedComp(key), [])

  const Active = COMPONENTS.find(c => c.key === selectedComp)?.Component ?? null
  const Active2 = <Test4/>
  return (
    <div>
      <h1>List Comps</h1>
      <ul>
        {COMPONENTS.map(comp => (
          <li key={comp.key}>
            <button
              type="button"
              onClick={() => onSelect(comp.key)}
              aria-pressed={selectedComp === comp.key}
            >
              {comp.label}
            </button>
          </li>
        ))}
      </ul>
      <div>
        {Active && (
          <Suspense fallback={<div>Loading...</div>}>
            <Active />
          </Suspense>
        )}
      </div>
      <div>{Active2}</div>
    </div>
  )
}

export default memo(ListComps)
