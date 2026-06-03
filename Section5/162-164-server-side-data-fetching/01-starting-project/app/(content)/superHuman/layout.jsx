import React from 'react'

function layout({ hero, villain, children }) {
  return (
		<div>
			<>{children}</>
			<section id='archive-filter'>{hero}</section>
			<section id='latest-news'>{villain}</section>
		</div>
	)
}

export default layout