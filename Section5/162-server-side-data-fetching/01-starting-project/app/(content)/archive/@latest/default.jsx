import NewListComp from '@/components/news-list'
import { getLatestNews } from '@/lib/news'
import React from 'react'

async function LatestNewsPage() {
	const latestNews = await getLatestNews()
	console.log(latestNews)
	return (
		<>
			<h2>Latest News</h2>
			<NewListComp news={latestNews} />
		</>
	)
}

export default LatestNewsPage
