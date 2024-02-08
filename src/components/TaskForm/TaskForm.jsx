import { useState } from 'react'
import styles from './TaskForm.module.css'

const TaskForm = ({ onSave, onCancel }) => {
	const [categoryName, setCategoryName] = useState('')
	const [activityName, setActivityName] = useState('')
	const [taskName, setTaskName] = useState('')
	const [taskDescription, setTaskDescription] = useState('')
	const [days, setDays] = useState([])

	const handleSubmit = (event) => {
		event.preventDefault()
		const newTaskData = {
			categoryName,
			activityTypes: [
				{
					activityName,
					Tasks: [
						{
							taskName,
							taskDescription,
							days: days.split(',').map((day) => day.trim()),
						},
					],
				},
			],
		}
		onSave(newTaskData)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className={styles.mainForm}
		>
			<div>
				<div className={styles.categoryName}>
					<label className={styles.categoryLabel}>
						Category Name:
						<input
							type='text'
							value={categoryName}
							onChange={(e) => setCategoryName(e.target.value)}
						/>
					</label>
				</div>
				<div className={styles.activityName}>
					<label className={styles.activityLabel}>
						Activity Name:
						<input
							type='text'
							value={activityName}
							onChange={(e) => setActivityName(e.target.value)}
						/>
					</label>
				</div>
				<div className={styles.taskName}>
					<label className={styles.taskLabel}>
						Task Name:
						<input
							type='text'
							value={taskName}
							onChange={(e) => setTaskName(e.target.value)}
						/>
					</label>
				</div>
				<div className={styles.taskDesc}>
					<label className={styles.labelDesc}>
						Task Description:
						<input
							type='text'
							value={taskDescription}
							onChange={(e) => setTaskDescription(e.target.value)}
						/>
					</label>
				</div>
				<div className={styles.dayName}>
					<label className={styles.dayLabel}>
						Day:
						<input
							type='text'
							value={days}
							onChange={(e) => setDays(e.target.value)}
						/>
					</label>
				</div>
				<div className={styles.addButtonContainer}>
					<button
						type='submit'
						className={styles.saveBtn}
					>
						Save
					</button>
					<button
						type='button'
						onClick={onCancel}
						className={styles.cancelBtn}
					>
						Cancel
					</button>
				</div>
			</div>
		</form>
	)
}

export default TaskForm
