import styles from './NavBar.module.css'

const NavBar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles['search-bar']}>
				<img
					src='/searchIcon.svg'
					alt='logo'
					className={styles['searchIcon']}
				/>
				<input
					type='text'
					placeholder='Search'
				/>
			</div>
			<button className={styles['notifications-button']}>
				<img
					src='/notificationIcon.svg'
					className={styles.notificationIcon}
				/>
			</button>
		</div>
	)
}

export default NavBar
