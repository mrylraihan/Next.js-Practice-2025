import NewListComp from '@/components/news-list'
import {
	getAvailableNewsMonths,
	getAvailableNewsYears,
	getNewsForYear,
    getNewsForYearAndMonth,
} from '@/lib/news'
import Link from 'next/link'
import React, { Suspense } from 'react'

async function FilteredHeader({year, month}){

	let archiveLinks = await getAvailableNewsYears()

	if (year && !month) {
		archiveLinks = await getAvailableNewsMonths(year)
		console.log('archiveLinks:', archiveLinks)
	}

	if (year && month) {
		archiveLinks = []
		console.log('archiveLinks', archiveLinks)
	}

	return (<>
	<header id='archive-header'>
				<nav>
					<ul>
						{archiveLinks.map((link) => {
							const href = year
								? `/archive/${year}/${link}`
								: `/archive/${link}`

							return (
								<li key={link}>
									<Link href={href}>{link}</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</header>
	</>)
}

async function FilteredNews({year, month}){
	let news;

	if(year && !month){
		news = await getNewsForYear(year)
	}else if(year && month){
		news = await getNewsForYearAndMonth(year, month)
	}

	let newsContent = <p>No news found for the selected period.</p>

	if (news && news.length > 0) {
		newsContent = <NewListComp news={news} />
	}
	return newsContent
}

async function FilteredNewsPage({ params }) {

	const selectedYear = params.filter?.[0]
	const selectedMonth = params.filter?.[1]



	
    const availableYears = await getAvailableNewsYears()
	if (
		(selectedYear && !availableYears.includes(selectedYear)) ||
		(selectedMonth &&
			!getAvailableNewsMonths(selectedYear).includes(selectedMonth))
	) {
		throw new Error('Invalid year or month selected')
	}
	// console.log(NewsForYear)

	return (
		<>
			{/* <header id='archive-header'>
				<nav>
					<ul>
						{archiveLinks.map((link) => {
							const href = selectedYear
								? `/archive/${selectedYear}/${link}`
								: `/archive/${link}`

							return (
								<li key={link}>
									<Link href={href}>{link}</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</header> */}
			<Suspense fallback={<p>Loading header...</p>}>
			<FilteredHeader year={selectedYear} month={selectedMonth} />
			</Suspense>
			<Suspense fallback={<p>Loading news...</p>}>
			<FilteredNews year={selectedYear} month={selectedMonth} />
			</Suspense>
		</>
	)
}

export default FilteredNewsPage
