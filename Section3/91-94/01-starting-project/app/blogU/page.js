import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <p><Link href={'/blogU/post-1'}>Post-1</Link></p>
      <p><Link href={'/blogU/post-2'}>Post-2</Link></p>
    </div>
  )
}

export default page
