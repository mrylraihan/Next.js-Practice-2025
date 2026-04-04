import React, { Suspense } from 'react'

const GetQuote = async () => {
  const res = await fetch('https://api.kanye.rest/')
  // const res = await fetch('https://api.kanye.rest676/')
  if (!res.ok) {
    throw new Error('Failed to fetch quote')
  }
  const data = await res.json()
  return <h3>{data.quote}</h3>
}

async function KanyeThree() {
  // const data = await getQuote()
  return (
    <div>
      <h1>Kanye Three</h1>
      <Suspense fallback={<div>Loading quote...</div>}>
      <GetQuote/>
      </Suspense>
    </div>
  )
}

export default KanyeThree