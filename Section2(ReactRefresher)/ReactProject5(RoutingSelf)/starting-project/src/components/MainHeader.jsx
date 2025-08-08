import { MdPostAdd, MdMessage } from 'react-icons/md'
import { Link } from 'react-router-dom'
import classes from './MainHeader.module.css'

function MainHeader({ onCreatePost }) {
	return (
		<header className={classes.header}>
			<h1 className={classes.logo}>
				<Link to='/'>
				<MdMessage />
				React Poster
				</Link>
			</h1>
			<p>
				<Link to='/post'>
				<button className={classes.button} onClick={onCreatePost}>
					<MdPostAdd size={18} />
					New Post
				</button>
				</Link>
			</p>
		</header>
	)
}

export default MainHeader
