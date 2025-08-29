import { Link } from 'react-router-dom'
import './Navbar.css' // We'll create this next

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<Link to='/' className='navbar-logo'>
					Home
				</Link>
				<ul className='nav-menu'>
					<li className='nav-item'>
						<Link to='/mform' className='nav-links'>
							Multi-Form
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/list' className='nav-links'>
							List
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/about' className='nav-links'>
							About
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/second' className='nav-links'>
							Second-List
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
