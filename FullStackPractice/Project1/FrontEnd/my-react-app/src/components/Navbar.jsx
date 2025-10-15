import React from 'react'
import { Link } from 'react-router-dom' // If using React Router
// import './Navbar.css' // Create this CSS file

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<ul className='nav-menu'>
					<li className='nav-item'>
						<Link to='/' className='nav-link'>
							Home
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/add' className='nav-link'>
							Add
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/about' className='nav-link'>
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
