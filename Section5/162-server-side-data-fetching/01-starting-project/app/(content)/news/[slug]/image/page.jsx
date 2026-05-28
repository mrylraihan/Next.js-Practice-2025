import { getNewsItem } from '@/lib/news'
import { notFound } from 'next/navigation'
import React from 'react'

async function ImagePage({params}) { 
        const newsId = params.slug
        const newsItem = await getNewsItem(newsId)
    // if(!newsItem) {
    //         return notFound()
    //     }
  return (
		<div className='fullscreen-image'>
			<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
		</div>
	)
}

export default ImagePage