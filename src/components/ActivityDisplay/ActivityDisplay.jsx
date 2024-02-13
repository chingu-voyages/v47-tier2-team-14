import { useState } from "react";
import styles from "./ActivityDisplay.module.css";
import Tasks from "../Tasks/Tasks";
import PropTypes from "prop-types";

const ActivityDisplay = ({ data }) => {
  // Initialize state with completion status for each task
  const [tasks, setTasks] = useState(
    data.Tasks.map((task) => ({
      ...task,
      isCompleted: task.isCompleted || false,
    }))
  );

  // Update a task's completion status

  const toggleTaskCompletion = (taskIndex, isCompleted) => {
    const newTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, isCompleted: isCompleted } : task
    );
    setTasks(newTasks);
  };

  // Calculate the number of completed tasks
  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;

  // save function for the editTask
  const saveTaskEdits = (taskIndex, updatedTask) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.activityDiv}>
      <div className={styles.activityNameDiv}>
        <img src="/elipseIcon.svg" alt="Logo" className={styles.elipseIcon} />
        <p>{data.activityName} </p>
        <p className={styles.activityNameCount}>
          {completedTasksCount}/{data.Tasks.length}
        </p>
      </div>

      {tasks.map((item, index) => (
        <Tasks
          data={item}
          key={index}
          onToggleTask={(isCompleted) =>
            toggleTaskCompletion(index, isCompleted)
          }
          onSave={(updatedTask) => saveTaskEdits(index, updatedTask)}
        />
      ))}
    </div>
  );
};

ActivityDisplay.propTypes = {
  data: PropTypes.shape({
    activityName: PropTypes.string.isRequired,
    Tasks: PropTypes.array.isRequired,
  }).isRequired,
};

export default ActivityDisplay;
