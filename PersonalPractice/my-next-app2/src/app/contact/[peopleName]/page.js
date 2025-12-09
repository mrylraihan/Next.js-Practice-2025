import React from 'react'

 function PeoplePage(props) {
    const params =  props.params;
    console.log("props", props)
    console.log("params", params)
  console.log("query", props.query)
  return (
    <div>
        <h1>People Page</h1>
          <h3>{params.peopleName}</h3>
    </div>
  )
}

export default PeoplePage