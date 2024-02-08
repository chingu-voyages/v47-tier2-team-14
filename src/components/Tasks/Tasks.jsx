import { useState } from "react";
import styles from "./Tasks.module.css";
import PropTypes from "prop-types";

const Tasks = ({ data }) => {
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);

  return (
    <div className={styles.TaskDetailsDiv}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => setIsCompleted(e.target.checked)}
      ></input>
      <p> {data.taskName}</p>
      <p> {data.taskDescription}</p>
      <p> {data.days}</p>
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
