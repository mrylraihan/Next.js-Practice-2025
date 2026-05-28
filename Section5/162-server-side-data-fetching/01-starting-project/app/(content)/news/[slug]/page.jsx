// 'use client'
// import { useParams } from 'next/navigation'
import { getNewsItem } from '@/lib/news'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function NewsDetailPage({ slug }) {
// async function NewsDetailPage({ params }) {
	// const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsId)
	const newsItem = await getNewsItem(slug)
	
	if(!newsItem) {
	  notFound()
	}
	console.log(newsItem)
	return (
		<article className='news-article'>
			<header>
				<Link href={`/news/${newsItem.slug}/image`}>
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</Link>
				<h1>{newsItem.title}</h1>
				<time dateTime={newsItem.date}>{newsItem.date}</time>
			</header>
			<p>{newsItem.content}</p>
		</article>
	)
}

// export default NewsDetailPage

import React, { Suspense } from 'react'

async function NewsDetailPageMain({params}) {
	const newsId = params.slug
	
  return (
		// <Suspense fallback={<p>Loading news details...</p>}>
			<NewsDetailPage slug={newsId} />
		// {/* </Suspense> */}
	)
}

export default NewsDetailPageMain