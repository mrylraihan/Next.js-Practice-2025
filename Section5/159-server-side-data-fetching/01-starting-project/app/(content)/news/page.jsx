import React from 'react'
import NewListComp from '@/components/news-list'

const getNewsData = async () => {
	const data = await fetch('http://localhost:8000/news');
	const news = await data.json();
	return news;
}	

async function NewsPage() {
	const news = await getNewsData();
	return (
		<>
			<h1>News Page</h1>
			<NewListComp news={news} />
		</>
	)
}

export default NewsPage
