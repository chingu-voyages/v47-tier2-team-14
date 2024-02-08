import styles from './Modal.module.css'

const Modal = ({ children, onClose }) => {
	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				{children}
				<button
					className={styles.closeButton}
					onClick={onClose}
				>
					X
				</button>
			</div>
		</div>
	)
}

export default Modal
