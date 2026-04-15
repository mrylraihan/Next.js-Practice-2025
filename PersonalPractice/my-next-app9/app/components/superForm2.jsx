import React from 'react'

function SuperForm2({state,refArr,action}) {
  const objectKeys = Object.keys(state)
  return (
    <>
    <h3>SuperForm2</h3>
    <form onSubmit={action}>
        {
            objectKeys.map((key, index)=>(
                <div key={key}>
                    <label htmlFor={key}>{key.split(/(?=[A-Z])/,2).join(" ")}:
                        <input type="text" name={key} id={key} ref={refArr[index]}/>
                    </label>
                </div>
            ))
        }
        <button type="submit">submit</button>
    </form> 
    </>
  )
}

export default SuperForm2