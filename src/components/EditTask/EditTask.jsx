import PropTypes from "prop-types";

const EditTask = ({ task, onChange, onSave }) => {
  return (
    <div>
      <input
        type="text"
        name="taskName"
        value={task.taskName}
        onChange={onChange}
        placeholder="Task Name"
      />
      <input
        type="text"
        name="taskDescription"
        value={task.taskDescription}
        onChange={onChange}
        placeholder="Task Description"
      />
      <input
        type="text"
        name="days"
        value={task.days}
        onChange={onChange}
        placeholder="Days"
      />
      <button onClick={onSave}>Save</button>
    </div>
  );
};
EditTask.propTypes = {
  task: PropTypes.shape({
    taskName: PropTypes.string.isRequired,
    taskDescription: PropTypes.string.isRequired,
    days: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditTask;
