import PropTypes from 'prop-types'
import styles from './EditTask.module.css'

const EditTask = ({
	task,
	onChange,
	onSave,
	onCancel,
	// onDelete
}) => {
	return (
		<div className={styles.EditTaskForm}>
			<input
				type='text'
				name='taskName'
				value={task.taskName}
				onChange={onChange}
				placeholder='Task Name'
			/>
			<input
				type='text'
				name='taskDescription'
				value={task.taskDescription}
				onChange={onChange}
				placeholder='Task Description'
			/>
			<input
				type='text'
				name='days'
				value={task.days}
				onChange={onChange}
				placeholder='Days'
			/>
			<div className={styles.buttonContainer}>
				<button
					onClick={onSave}
					className={styles.onSave}
				>
					Save
				</button>
				<button
					onClick={onCancel}
					className={styles.onCancel}
				>
					Cancel
				</button>
				{/* <button
					onClick={onDelete}
					className={styles.onDelete}
				>
					Delete
				</button> */}
			</div>
		</div>
	)
}
EditTask.propTypes = {
	task: PropTypes.shape({
		taskName: PropTypes.string.isRequired,
		taskDescription: PropTypes.string.isRequired,
		days: PropTypes.string.isRequired,
	}).isRequired,
	onChange: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	// onDelete: PropTypes.func.isRequired,
}

export default EditTask
