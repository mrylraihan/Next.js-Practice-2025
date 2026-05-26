import React, { Suspense } from 'react'
import NewListComp from '@/components/news-list'
import NewsNotFound from '../News-Not-Found';
import { getAllNews } from '@/lib/news';

const GetNewsData = async () => {
	const news = getAllNews()
	// const data = await fetch('http://localhost:3000/api/news')
	// const data = await fetch('http://localhost:8000/news');
	// const news = await data.json();
	await new Promise(resolve => setTimeout(resolve, 2000));
	// if (!data.ok) {
	// 	throw new Error('Failed to fetch news data')
	// }

	return <NewListComp news={news} />
}	

async function NewsPage() {
	
	return (
		<>
			<h1>News Page</h1>
			<Suspense fallback={<NewsNotFound/>}>
			<GetNewsData />
			</Suspense>
		</>
	)
}

export default NewsPage
