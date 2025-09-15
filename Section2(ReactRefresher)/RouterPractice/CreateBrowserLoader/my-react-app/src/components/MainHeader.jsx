import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

function MainHeader() {
  const data = useLoaderData();
  console.log(data, 'from main header');
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
        <Link to='/form1'>
        <li>form 1</li>
        </Link>
      </ul>
    </div>
  )
}

export default MainHeader
