import Link from 'next/link'
import React from 'react'

function PeopleList() {
    const peopleList = ["Mike", "Barrin", "Ryan"]
  return (
    <div>
      <ul>
        {peopleList.map(person=>{
            return <li key={person}><Link href={`/people/${person}`}>{person}</Link></li>
        })}
        {/* <li key={peopleList[0]}><Link href={`/people/${peopleList[0]}`}>{peopleList[0]}</Link></li>
        <li key={peopleList[1]}><Link href={`/people/${peopleList[1]}`}>{peopleList[1]}</Link></li>
        <li key={peopleList[2]}><Link href={`/people/${peopleList[2]}`}>{peopleList[2]}</Link></li> */}
      </ul>
    </div>
  )
}

export default PeopleList
