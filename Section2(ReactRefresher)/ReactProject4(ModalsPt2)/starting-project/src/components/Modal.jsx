import React from 'react'
import classes from './Modal.module.css'
function Modal({children, onClose}) {
  return (
		<>
			<div className={classes.backdrop} onClick={onClose}>
				<dialog open className={classes.modal}>
					{children}
				</dialog>
			</div>
		</>
	)
}

export default Modal