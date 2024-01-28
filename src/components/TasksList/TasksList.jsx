import styles from './TasksList.module.css';

const TasksList = ({ children }) => {
    return (
        <li className={styles['tasks-list']}>
            {children}
        </li>
    )
}

export default TasksList;
