'use client'
import React, { useEffect, useState } from 'react'
import NewListComp from '@/components/news-list'


function NewsPage() {
	const [loading, setLoading] = useState(false)
	const [news, setNews] = useState([])
	const [error, setError] = useState(null)
	useEffect(() => {
		const getData = async () => {
			setLoading(true)
			const data = await fetch('http://localhost:3000/api/news')
			// const data = await fetch('http://localhost:8000/news')
			if(!data.ok){
				setError('Failed to fetch news')
				return
			}
			const news = await data.json()
			setNews(news)
			setLoading(false)
		}
		getData()
	}, [])
	return (
		<>
			<h1>News Page</h1>
			{(loading && !error )&& <p>Loading...</p>}
			{!loading && <NewListComp news={news} />}
			{error && <h1>{error}</h1>}
		</>
	)
}

export default NewsPage
