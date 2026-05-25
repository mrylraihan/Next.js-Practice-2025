import React, { Suspense } from 'react'
import MainMessage from '../components/MainMessage'

function TestSuspense() {
  return (
    <div>
        <h1>Test the Suspense Component</h1>
        <Suspense fallback={<div>Loading...</div>}>
        <MainMessage/>  
        </Suspense  >
    </div>
  )
}

export default TestSuspense