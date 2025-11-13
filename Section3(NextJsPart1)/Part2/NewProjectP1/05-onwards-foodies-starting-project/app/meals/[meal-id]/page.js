import React from 'react'

function MealSingle(props) {
    const { params } = props;
    console.log(props)
  return (
      <div>MealSingle {params['meal-id']}</div>
  )
}

export default MealSingle