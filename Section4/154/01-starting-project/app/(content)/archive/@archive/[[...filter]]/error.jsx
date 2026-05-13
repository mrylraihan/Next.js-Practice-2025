'use client'
import React from 'react'

function FilterError({error}) {
    console.error('Error in FilteredNewsPage:', error.message)
  return (
    <div id='error'>
        <h2>
            An error occurred
        </h2>
        <p>
            Invalid Path
        </p>
    </div>
  )
}

export default FilterError