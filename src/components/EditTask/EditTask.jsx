import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./EditTask.module.css";

const EditTask = ({ task, onSave, onCancel, onDelete }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedTask);

    // onClose();
  };
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      onDelete(task.id);
      onCancel();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.EditTaskForm}>
        <input
          type="text"
          name="taskName"
          value={editedTask.taskName}
          onChange={handleEditChange}
          placeholder="Task Name"
        />
        <input
          type="text"
          name="taskDescription"
          value={editedTask.taskDescription}
          onChange={handleEditChange}
          placeholder="Task Description"
        />
        <input
          type="text"
          name="days"
          value={editedTask.days}
          onChange={handleEditChange}
          placeholder="Days"
        />
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.onSave}>
            Save
          </button>
          <button type="button" onClick={onCancel} className={styles.onCancel}>
            Cancel
          </button>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </form>
  );
};
EditTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    taskName: PropTypes.string.isRequired,
    taskDescription: PropTypes.string.isRequired,
    days: PropTypes.string.isRequired,
  }).isRequired,

  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EditTask;
