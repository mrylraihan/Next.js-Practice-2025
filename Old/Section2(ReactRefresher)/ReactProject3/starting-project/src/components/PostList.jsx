import React, { useState } from 'react'
import Post from './Post'
import styles from './PostList.module.css'
import NewPost from './NewPost'
const STATIC_DATA = [
	{ author: 'Wallie', body: 'React.js is Awesome' },
	{ author: 'Heshow', body: 'Next.js is Awesome' },
]
function PostList() {
    const [data, setData] = useState(STATIC_DATA)
  return (
		<>
			<NewPost setData={setData} />
			<ul className={styles.posts}>
				{data.map((ele, idx) => (
					<Post author={ele.author} body={ele.body} key={idx} />
				))}
			</ul>
		</>
	)
}

export default PostList
