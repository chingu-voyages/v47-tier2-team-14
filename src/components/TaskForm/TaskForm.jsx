import { useState } from "react";

const TaskForm = ({ onSave, onCancel }) => {
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category Name:
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </label>
      <label>
        Activity Name:
        <input
          type="text"
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
        />
      </label>
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <label>
        Task Description:
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </label>
      <label>
        Day:
        <input
          type="text"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
      </label>

      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default TaskForm;
