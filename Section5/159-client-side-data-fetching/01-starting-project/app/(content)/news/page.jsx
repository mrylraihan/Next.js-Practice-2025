'use client'
import React, { useEffect, useState } from 'react'
import NewListComp from '@/components/news-list'


function NewsPage() {
	const [loading, setLoading] = useState(true)
	const [news, setNews] = useState([])
	const [error, setError] = useState(null)
	useEffect(() => {
		setLoading(true)
		const getData = async () => {
			const data = await fetch('http://localhost:3000/api/news')
			// const data = await fetch('http://localhost:8000/news')
			if(!data.ok){
				setError('Failed to fetch news')
				return
			}
			const news = await data.json()
			setNews(news)
		}
		getData()
		setLoading(false)
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
