import React from 'react'
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <div>
      <ul>
        <Link to='/'>
        <li>Home</li>
        </Link>
        <Link to='/about'>
        <li>about</li>
        </Link>
        <Link to='/more'>
        <li>more</li>
        </Link>
      </ul>
    </div>
  )
}

export default MainHeader
