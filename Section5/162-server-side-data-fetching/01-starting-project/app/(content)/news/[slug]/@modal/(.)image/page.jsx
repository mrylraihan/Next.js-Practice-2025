'use client'
import { DUMMY_NEWS } from '@/dummy-news'
import { notFound, usePathname, useRouter } from 'next/navigation'
import React from 'react'

function InterceptedImagePage({ params }) {
	const router = useRouter()
	const pathName = usePathname()
	console.log('pathName', pathName)
	const newsId = params.slug
	const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsId)
	console.log('newsItem', newsItem)
	if (!newsItem) {
		return notFound()
	}
	return (
		<>
			<div className='modal-backdrop' onClick={router.back}/>
			<dialog className='modal' open>
				<div className='fullscreen-image'>
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</div>
			</dialog>
		</>
	)
}

export default InterceptedImagePage
