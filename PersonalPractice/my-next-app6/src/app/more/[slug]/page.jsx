import React from 'react'

//  async function MoreExtra({params}) {
    // const params =  await props.params
    // const slug = await params.slug
function MoreExtra({params}) {
    console.log("params in more extra page:", params.slug);
  return (
    <div>
      <h1>More Extra Page: {params.slug}</h1>
    </div>
  )
}

export default MoreExtra
