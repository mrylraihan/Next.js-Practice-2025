import React from 'react'

function MealDetails(props) {
    const {params} = props;
    const {mealSlug} = params;
    console.log(mealSlug);
  return (
    <div>MealDetails</div>
  )
}

export default MealDetails