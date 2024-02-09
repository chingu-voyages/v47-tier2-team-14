import { useState } from "react";
import styles from "./Tasks.module.css";
import PropTypes from "prop-types";

const Tasks = ({ data }) => {
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);

  return (
    <div className={styles.TaskDetails}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => setIsCompleted(e.target.checked)}
      ></input>
      <div className={styles.TaskDetailsDiv}>
        <p> {data.taskName}</p>
        <p> {data.taskDescription}</p>
        <p className={styles.TaskDays}> {data.days}</p>
      </div>
    </div>
  );
};

Tasks.propTypes = {
  data: PropTypes.shape({
    taskName: PropTypes.string.isRequired,
    taskDescription: PropTypes.string,
    days: PropTypes.string,
    isCompleted: PropTypes.bool,
  }).isRequired,
};

export default Tasks;
