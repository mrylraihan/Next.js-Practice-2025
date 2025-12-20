import React from 'react'
import classes from './Modal.module.css'
import { useNavigate } from 'react-router-dom';
function Modal({children}) {
	const nav = useNavigate()
	const closeHandler =()=>{
		nav(-1)
	}

  return (
		<>
			<div className={classes.backdrop} onClick={closeHandler}>
				<dialog open className={classes.modal}>
					{children}
				</dialog>
			</div>
		</>
	)
}

export default Modal