import React, { Suspense } from 'react'
import { getKaneyQuote } from '../lib'
import LoadingQuote from './loadingQuote'



export async function GetQuote() {
    const res = await getKaneyQuote()
  return (
    <div>
      <p>{res.quote}</p>
    </div>
  )
}

function page() {
  return (
    <>
    <h1>Kanye 2</h1>
    <Suspense fallback={<LoadingQuote />}>
      <GetQuote />
    </Suspense>
    </>
  )
}

export default page

