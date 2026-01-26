import Link from 'next/link'
import React from 'react'

function layout({children}) {
  return (
    <div style={{border:"solid black 1px"}}>
      <div>
        {children}
      </div>
      <h1>Share Layout</h1>
      <ul>
        <li><Link href='/meals/share/share-family'>Family</Link></li>
        <li><Link href='/meals/share/share-friends'>Friends</Link></li>
      </ul>
    </div>
  )
}

export default layout
