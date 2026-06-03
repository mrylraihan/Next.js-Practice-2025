
import ImageModal from '@/components/image-modal'
import { getNewsItem } from '@/lib/news'
import React from 'react'

async function InterceptedImagePage({ params }) {

	const newsId = params.slug
	const newsItem = await getNewsItem(newsId)
	console.log('newsItem', newsItem)
	if (!newsItem) {
		return notFound()
	}
	return (
		<>
			<ImageModal>
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</ImageModal>
		</>
	)
}

export default InterceptedImagePage
