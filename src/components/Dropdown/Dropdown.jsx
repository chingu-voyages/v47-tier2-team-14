import { useState } from 'react'
import styles from './Dropdown.module.css'
import PropTypes from 'prop-types'

const Dropdown = ({
	title,
	children,
	// onDelete
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.container}>
			<div className={styles.categoryBox}>
				<div className={styles.mylistBox}>
					<img
						src='/elipseIcon.svg'
						alt='Logo'
						className={styles.elipseIcon}
					/>
					<p className={styles.routineText}>{title}</p>
					<button
						// onClick={onDelete}
						className={styles.deleteButton}
						aria-label='Delete category'
					>
						X
					</button>
				</div>
				<button
					onClick={toggleDropdown}
					className={styles.mylistButton}
				>
					<img
						src='/arrowIcon.svg'
						alt='Toggle'
						className={styles.arrowIcon}
					/>
				</button>
			</div>
			<div className={`${styles.dropdownContent} ${isOpen ? styles.open : ''}`}>
				{children}
			</div>
		</div>
	)
}

//Props validation
Dropdown.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	// onDelete: PropTypes.func.isRequired,
}

export default Dropdown
