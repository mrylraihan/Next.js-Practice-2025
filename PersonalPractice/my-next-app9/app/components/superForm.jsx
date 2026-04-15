import React from 'react'

function SuperForm({state, action}) {
  const objectKeys = Object.keys(state)
  return (
    <>
    <h3>SuperForm</h3>
    <form action={action}>
        {
            objectKeys.map((key)=>(
                <div key={key}>
                    <label htmlFor={key}>{key.split(/(?=[A-Z])/,2).join(" ")}:
                        <input type="text" name={key} id={key}/>
                    </label>
                </div>
            ))
        }
        <button type="submit">submit</button>
    </form> 
    </>
  )
}

export default SuperForm