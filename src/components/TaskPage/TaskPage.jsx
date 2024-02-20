// import { useState } from "react";
import { Link } from 'react-router-dom'
import TaskForm from '../TaskForm/TaskForm'
import Modal from '../Modal/Modal'
import { useTaskManager } from '../TaskManager/TaskManager'
import { allData } from '../../data/tasks-example'
import CategoryType from '../../components/CategoryType/CategoryType'
import styles from '../TaskPage/TaskPage.module.css'
import AddIcon from '@mui/icons-material/Add'

const initialData = JSON.parse(localStorage.getItem('tasksData')) || []
const TaskPage = () => {
	const { data, isModalOpen, openModal, closeModal, handleSave } =
		useTaskManager(initialData)

	// get current date
	const date = new Date()
	const currentDate = `${date.toLocaleString('default', {
		month: 'short',
	})} ${date.getDate()}, ${date.getFullYear()}`

	return (
		<div className={styles.TaskPageContainer}>
			<div className={styles.TaskPageNav}>
				{/* NEW TASK BUTTON START */}
				<div className={styles.AddTask}>
					<Link
						onClick={openModal}
						className={styles.addTaskButton}
					>
						<AddIcon />
						<p className={styles.buttonText}>New Task</p>
					</Link>
					{/* MODAL BODY START */}
					{isModalOpen && (
						<Modal onClose={closeModal}>
							<TaskForm
								onSave={handleSave}
								onClose={closeModal}
								existingCategories={data.map((item) => item.categoryName)}
							/>
						</Modal>
					)}
					{/* MODAL BODY END */}
				</div>
			</div>
			{/* NEW TASK BUTTON END */}

			<div className={styles.TaskPageBody}>
				<div className={styles.TaskPageBodyNav}>
					<img
						src='./angle-small-left.svg'
						alt='Logo'
						className={styles.TaskPageNavIcon}
					></img>
					<p>{currentDate}</p>
					<img
						src='./angle-small-right.svg'
						alt='Logo'
						className={styles.TaskPageNavIcon}
					></img>
				</div>
				{allData.map((data, index) => (
					<CategoryType
						data={data}
						key={index}
						id={index}
					/>
				))}
				{data.map((item, index) => (
					<CategoryType
						data={item}
						key={index}
					/>
				))}
			</div>
		</div>
	)
}
export default TaskPage
