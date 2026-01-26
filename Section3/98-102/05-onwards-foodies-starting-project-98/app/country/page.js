import Link from 'next/link'
import React from 'react'

function CountryPage() {
  return (
    <div>
      <h1>Country Page</h1>
      <p><Link href='/country/state'>State</Link></p>
    </div>
  )
}

export default CountryPage
