import React from 'react'

function NewDetailLayout({ children, modal }) {
  return (
    <div>
      {modal}
      {children}
    </div>
  )
}

export default NewDetailLayout