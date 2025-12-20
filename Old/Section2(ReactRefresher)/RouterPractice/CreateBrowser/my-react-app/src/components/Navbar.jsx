import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <div>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='about'><li>About</li></Link>
          <Link to='more'><li>More</li></Link>
          <Link to='list'><li>List</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
