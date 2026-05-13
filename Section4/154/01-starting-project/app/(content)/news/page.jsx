import React from 'react'
import { DUMMY_NEWS } from '@/dummy-news'
import NewListComp from '@/components/news-list'

function NewsPage() {
	console.log(DUMMY_NEWS)
	
	return (
		<>
			<h1>News Page</h1>
			<NewListComp news={DUMMY_NEWS} />
		</>
	)
}

export default NewsPage
