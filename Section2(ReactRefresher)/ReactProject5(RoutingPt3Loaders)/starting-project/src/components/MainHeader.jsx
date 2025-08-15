import { MdPostAdd, MdMessage } from 'react-icons/md'
import {Link} from 'react-router-dom'
import classes from './MainHeader.module.css'

function MainHeader({ onCreatePost }) {
	return (
		<header className={classes.header}>
			<Link to='/'>
				<h1 className={classes.logo}>
					<MdMessage />
					React Poster
				</h1>
			</Link>
			<p>
				<Link
					to='/about'
					className={classes.button}
					onClick={onCreatePost}>
					<MdPostAdd size={18} />
					About
				</Link>
			</p>
			<p>
				<Link
					to='/create-post'
					className={classes.button}
					onClick={onCreatePost}>
					<MdPostAdd size={18} />
					New Post
				</Link>
			</p>
			<p>
				<Link
					to='/test-form'
					className={classes.button}
					onClick={onCreatePost}>
					<MdPostAdd size={18} />
					Test Form
				</Link>
			</p>
		</header>
	)
}

export default MainHeader
