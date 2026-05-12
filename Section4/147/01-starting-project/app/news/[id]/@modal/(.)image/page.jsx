'use client'
import { DUMMY_NEWS } from '@/dummy-news'
import { notFound, usePathname } from 'next/navigation'
import React from 'react'

function InterceptedImagePage({ params }) {
	const pathName = usePathname()
	console.log('pathName', pathName)
	const newsId = params.id
	const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsId)
	console.log('newsItem', newsItem)
	if (!newsItem) {
		return notFound()
	}
	return (
		<>
			<div className='modal-backdrop' />
			<dialog className='modal' open>
				<div className='fullscreen-image'>
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</div>
			</dialog>
		</>
	)
}

export default InterceptedImagePage
