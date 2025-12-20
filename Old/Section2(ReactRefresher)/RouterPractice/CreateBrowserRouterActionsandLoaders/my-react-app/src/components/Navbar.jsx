import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/form'><li>Form</li></Link>
        <Link to='/loader'><li>Loader</li></Link>
        <Link to='/list'><li>List</li></Link>
      </ul>
    </div>
    {<Outlet/>}
    </>
  )
}

export default Navbar
