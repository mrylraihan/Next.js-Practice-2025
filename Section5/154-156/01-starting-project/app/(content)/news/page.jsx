import React, { Suspense } from 'react'
import NewListComp from '@/components/news-list'

const GetNewsData = async () => {
	const data = await fetch('http://localhost:3000/api/news')
	const news = await data.json();
	await new Promise((resolve) => setTimeout(resolve, 9000));
	return (
		<>
			<NewListComp news={news} />
		</>
	)
}	

async function NewsPage() {
	
	return (
		<>
			<h1>News Page</h1>
			<Suspense fallback={<>...loading</>}>
			<GetNewsData />
			</Suspense>
		</>
	)
}

export default NewsPage
