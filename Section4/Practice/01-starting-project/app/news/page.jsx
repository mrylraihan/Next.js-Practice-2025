import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function News() {
  const newsArray = [
    {title:'new-article-1'},
    {title:'new-article-2'},
    {title:'new-article-3'},
  ]
  return (
    <div id="news">
      <h1>Next.js Routing & News Page Rendering</h1>
      <ul className='news-list'>
          {newsArray.map(article=>(<Link href={`/news/${article.title}`}><li>{article.title}</li></Link>))}
      </ul>
    </div>
  )
}

export default News