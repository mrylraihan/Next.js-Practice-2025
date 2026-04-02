import React from 'react'

export const metadata = {
  title:"Meal not found",
  description:"the meal you are looking for is not found, maybe it was removed or the url is wrong"
}
function NotFound() {
  return (
		<main className='not-found'>
			<h1>Meal not found</h1>
			<p>Unfortunately we couldn't find the requested page or meals data</p>
		</main>
	)
}

export default NotFound
