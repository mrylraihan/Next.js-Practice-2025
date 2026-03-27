"use client"

import { useFormStatus } from "react-dom"


function MealFormSubmit() {
    const status = useFormStatus()
    console.log(status)
  return (
    <button disabled={status.pending} type="submit">
        {
            status.pending ? 'Submitting...' : 'Share Meal'
        }
    </button>
  )
}

export default MealFormSubmit