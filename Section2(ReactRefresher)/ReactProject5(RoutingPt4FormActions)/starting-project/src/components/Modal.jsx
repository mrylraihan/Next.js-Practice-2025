import React from 'react'
import classes from './Modal.module.css'
import { useNavigate } from 'react-router-dom';
function Modal({children}) {
	const nav = useNavigate()
	const closeHandler =()=> nav('..')

  return (
		<>
			<div className={classes.backdrop} onClick={()=>{}}>
				<dialog open className={classes.modal}>
					{children}
				</dialog>
			</div>
		</>
	)
}

export default Modal