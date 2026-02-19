import Link from 'next/link'
import React from 'react'
import mealsList from '@/data/mealData'

function MealsPage() {
    
  return (
    <div>
      <h1>Meals main page</h1>
      <Link href={`/meals/share`}><p>Share</p></Link>
      <ul>
        {mealsList.map(meal=><Link href={'/meals/'+meal.id} key={meal.id}><li>{meal.name}</li></Link>)}
      </ul>
    </div>
  )
}

export default MealsPage
