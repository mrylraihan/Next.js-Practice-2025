import NewListComp from '@/components/news-list'
import {
	getAvailableNewsMonths,
	getAvailableNewsYears,
	getNewsForYear,
    getNewsForYearAndMonth,
} from '@/lib/news'
import Link from 'next/link'
import React from 'react'

function FilteredNewsPage({ params }) {
	console.log('params', params.filter)

	const selectedYear = params.filter?.[0]
	const selectedMonth = params.filter?.[1]

	console.log('selectedYear', selectedYear)
	console.log('selectedMonth', selectedMonth)

	let news

	let archiveLinks = getAvailableNewsYears()

	if (selectedYear && !selectedMonth) {
		news = getNewsForYear(selectedYear)
		archiveLinks = getAvailableNewsMonths(selectedYear)
	}

	if (selectedYear && selectedMonth) {
		news = getNewsForYearAndMonth(selectedYear, selectedMonth)
        archiveLinks = []
	}

	let newsContent = <p>No news found for the selected period.</p>
    console.log("news", news)
	if (news && news.length > 0) {
		newsContent = <NewListComp news={news} />
	}

	// console.log(NewsForYear)

	return (
		<>
			<header id='archive-header'>
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
			</header>
			{newsContent}
		</>
	)
}

export default FilteredNewsPage
