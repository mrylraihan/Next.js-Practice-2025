import React from 'react'
import Link from 'next/link'
import { DUMMY_NEWS } from '@/dummy-news'
import Image from 'next/image'

function NewsPage() {
	console.log(DUMMY_NEWS)
	const content = DUMMY_NEWS.map((newsItem) => {
		return (
			<li key={newsItem.id}>
				<Link href={`/news/${newsItem.slug}`}>
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
					<span>{newsItem.title}</span>
				</Link>
			</li>
		)
	})
	return (
		<>
			<h1>News Page</h1>
			<ul className='news-list'>{content}</ul>
		</>
	)
}

export default NewsPage
