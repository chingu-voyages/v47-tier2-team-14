import styles from './Tasks.module.css';

const Tasks = ({ children }) => {
    return (
        <ul className={styles['tasks-container']}>
            {children}
        </ul>
    )
}

export default Tasks;
