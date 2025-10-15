import React from 'react'
import { useNavigate } from 'react-router-dom';

function List() {
    const nav = useNavigate();
    const people = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Jane'},
        {id: 3, name: 'Doe'},
    ]
  return (
    <div>
        <h1>List</h1>
        {people.map(person => (
            <div key={person.id} onClick={() => nav(`/list/${person.id}`)} style={{cursor: 'pointer', margin: '10px', border: '1px solid black', padding: '5px'}}>
                {person.name}
            </div>
        ))}
    </div>
  )
}

export default List
