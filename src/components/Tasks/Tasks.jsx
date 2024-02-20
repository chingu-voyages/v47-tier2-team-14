import { useState } from 'react'
import styles from './Tasks.module.css'
import PropTypes from 'prop-types'
import EditTask from '../../components/EditTask/EditTask'

const Tasks = ({
	data,
	onToggleTask,
	onSave,
	// onDelete
}) => {
	const [editMode, setEditMode] = useState(false)
	const [editedTask, setEditedTask] = useState({
		taskName: data.taskName,
		taskDescription: data.taskDescription,
		days: data.days,
	})
	// const [deleteTask, setDeleteTask] = useState({
	// 	taskName: data.taskName ? data.taskName : '',
	// 	taskDescription: data.taskDescription ? data.taskDescription : '',
	// 	days: data.days ? data.days : 0,
	// })

	const handleEditChange = (e) => {
		const { name, value } = e.target
		setEditedTask((prevTask) => ({ ...prevTask, [name]: value }))
	}

	const onToggle = (e) => {
		onToggleTask(e.target.checked)
	}

	return (
		<div className={styles.TaskDetails}>
			{!editMode && (
				<input
					type='checkbox'
					checked={data.isCompleted}
					onChange={onToggle}
				/>
			)}

			{editMode ? (
				<EditTask
					task={editedTask}
					onChange={handleEditChange}
					onSave={() => {
						onSave(editedTask)
						setEditMode(false)
					}}
					onCancel={() => {
						setEditMode(false)
					}}
					// onDelete={() => {
					// 	onDelete(deleteTask)
					// 	setEditMode(false)
					// }}
				/>
			) : (
				<div className={styles.TaskDetailsDiv}>
					<p className={data.isCompleted ? styles.strikeThrough : ''}>
						{' '}
						{data.taskName}
					</p>
					<p className={data.isCompleted ? styles.strikeThrough : ''}>
						{' '}
						{data.taskDescription}
					</p>
					<p
						className={`${styles.TaskDays} ${
							data.isCompleted ? styles.strikeThrough : ''
						}`}
					>
						{' '}
						{data.days}
					</p>
				</div>
			)}

			{!editMode && (
				<button
					onClick={() => setEditMode(true)}
					className={styles.editbtn}
				>
					Edit
				</button>
			)}
		</div>
	)
}

Tasks.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.any.isRequired,
		taskName: PropTypes.string.isRequired,
		taskDescription: PropTypes.string,
		days: PropTypes.string,
		isCompleted: PropTypes.bool,
	}).isRequired,
	onToggleTask: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
	// onDelete: PropTypes.func.isRequired,
}

export default Tasks
