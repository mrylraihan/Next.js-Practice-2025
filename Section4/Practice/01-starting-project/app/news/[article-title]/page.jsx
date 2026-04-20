import Link from 'next/link'
import React from 'react'

function Article({params}) {
  return (
    <div>
        <h1>Article-{params['article-title']}</h1>
        <Link href='/'>Home</Link>
    </div>
  )
}

export default Article