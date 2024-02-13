import { useState } from "react";
import styles from "./TaskForm.module.css";
import PropTypes from "prop-types";

const TaskForm = ({ onSave }) => {
  const [categoryName, setCategoryName] = useState("");
  const [activityName, setActivityName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [days, setDays] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTaskData = {
      categoryName,
      activityTypes: [
        {
          activityName,
          Tasks: [
            {
              taskName,
              taskDescription,
              days: days.split(",").map((day) => day.trim()),
            },
          ],
        },
      ],
    };
    onSave(newTaskData);
    resetForm();
  };

  const resetForm = () => {
    setCategoryName("");
    setActivityName("");
    setTaskName("");
    setTaskDescription("");
    setDays("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.mainForm}>
      <div>
        <div className={styles.categoryName}>
          <label className={styles.categoryLabel}>
            Category Name:
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.activityName}>
          <label className={styles.activityLabel}>
            Activity Name:
            <input
              type="text"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.taskName}>
          <label className={styles.taskLabel}>
            Task Name:
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.taskDesc}>
          <label className={styles.labelDesc}>
            Task Description:
            <input
              type="text"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.dayName}>
          <label className={styles.dayLabel}>
            Day:
            <input
              type="text"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.addButtonContainer}>
          <button type="submit" className={styles.saveBtn}>
            Save
          </button>
          <button type="button" onClick={resetForm} className={styles.clearBtn}>
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

//Props validation
TaskForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default TaskForm;
