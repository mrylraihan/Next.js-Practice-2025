import React from 'react'
import classes from './Modal.module.css'
function Modal({ openModal, children }) {
	return (
		<>
			<div className={classes.backdrop}>
				<dialog open={openModal} className={classes.modal}>
					{children}
				</dialog>
			</div>
		</>
	)
}

export default Modal