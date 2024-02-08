import styles from '../TaskPage/TaskPage.module.css'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'

const TaskPage = () => {
	const [isModalOpen, setModalOpen] = useState(false)

	return (
		<div className={styles.TaskPageContainer}>
			<div className={styles.TaskPageNav}>
				<div className={styles.TaskPageLeftNav}>
					<div className={styles.TaskPageLeftNavDiv}>
						<img
							src='./rectangle-list.svg'
							alt='Logo'
							className={styles.TaskPageNavIcon}
						></img>
						<p>List</p>
					</div>
					<div className={styles.TaskPageLeftNavDiv}>
						<img
							src='./calendar.svg'
							alt='Logo'
							className={styles.TaskPageNavIcon}
						></img>
						<p>Calender</p>
					</div>
				</div>

				{/* NEW TASK BUTTON START */}
				<div className={styles.TaskPageNavRight}>
					<button onClick={() => setModalOpen(true)}>
						<AddIcon />
						<p> New Task</p>
					</button>

					{isModalOpen && (
						<Modal onClose={() => setModalOpen(false)}>
							{/* MODAL BODY START */}
							<h2 className={styles.modalTitle}>Add / Edit Task</h2>
							<p className={styles.modalBody}>This is the modal content!</p>
							<button className={styles.modalSaveBtn}>Save</button>
							<button className={styles.modalDeleteBtn}>Delete</button>
							{/* MODAL BODY END */}
						</Modal>
					)}
				</div>
			</div>
			{/* NEW TASK BUTTON END */}

			<div className={styles.TaskPageBody}>
				<div className={styles.TaskPageBodyNav}>
					<div className={styles.TaskPageBodyNav}>
						<img
							src='./angle-small-left.svg'
							alt='Logo'
							className={styles.TaskPageNavIcon}
						></img>
						<p>Jan 01, 2024</p>
						<img
							src='./angle-small-right.svg'
							alt='Logo'
							className={styles.TaskPageNavIcon}
						></img>
					</div>
				</div>
			</div>
		</div>
	)
}
export default TaskPage
