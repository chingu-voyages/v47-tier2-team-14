import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ActivityDisplay.module.css";
import Tasks from "../Tasks/Tasks";

const ActivityDisplay = ({ data }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Initial load from localStorage or from props
    const storedData = JSON.parse(localStorage.getItem("tasksData")) || [];
    const activityTasks = storedData.find(
      (activity) => activity.activityName === data.activityName
    )?.Tasks;
    if (activityTasks) {
      setTasks(
        activityTasks.map((task) => ({
          ...task,
          isCompleted: task.isCompleted || false,
        }))
      );
    } else {
      // Fallback to initial data if not found in localStorage
      setTasks(
        data.Tasks.map((task) => ({
          ...task,
          isCompleted: task.isCompleted || false,
        }))
      );
    }
  }, [data]);

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const saveTaskEdits = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? { ...updatedTask } : task
    );

    const fullData = JSON.parse(localStorage.getItem("tasksData")) || [];

    const allDataWithIds = fullData.map((category) => {
      return {
        ...category,
        activityTypes: category.activityTypes.map((activity) => {
          if (activity.id == data.id) {
            return {
              ...activity,
              Tasks: updatedTasks,
            };
          }
          return activity;
        }),
      };
    });

    localStorage.setItem("tasksData", JSON.stringify(allDataWithIds));
    setTasks(updatedTasks);
  };

  // delete function to remove task
  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    // Load the full data structure from localStorage
    let fullData = JSON.parse(localStorage.getItem("tasksData")) || [];

    // Map through categories to update activities
    fullData = fullData.map((category) => {
      // Map through each activity within a category
      const updatedActivities = category.activityTypes.filter((activity) => {
        // Keep all activities that don't match the current one or if they have tasks left
        return (
          activity.id !== data.id ||
          (activity.id === data.id && updatedTasks.length > 0)
        );
      });

      // If there are no tasks left for the current activity, it will be removed
      return {
        ...category,
        activityTypes: updatedActivities,
      };
    });
    // .filter((category) => category.activityTypes.length > 0); // Optionally, remove any categories that are now empty

    // Update localStorage with the modified data
    localStorage.setItem("tasksData", JSON.stringify(fullData));

    // Update state if the activity still exists
    if (updatedTasks.length > 0) {
      setTasks(updatedTasks);
    } else {
      // Here you might need additional logic to handle UI changes when the activity is deleted
    }
  };

  return (
    <div className={styles.activityDiv}>
      <div className={styles.activityNameDiv}>
        <img src="/elipseIcon.svg" alt="Logo" className={styles.elipseIcon} />
        <p>{data.activityName}</p>
        <p className={styles.activityNameCount}>
          {tasks.filter((task) => task.isCompleted).length}/{tasks.length}
        </p>
      </div>
      {tasks.map((task) => (
        <Tasks
          key={task.id}
          data={task}
          onToggleTask={() => toggleTaskCompletion(task.id)}
          onSave={saveTaskEdits}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

ActivityDisplay.propTypes = {
  data: PropTypes.shape({
    activityName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    Tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        taskName: PropTypes.string.isRequired,
        taskDescription: PropTypes.string,
        days: PropTypes.string,
        isCompleted: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};

export default ActivityDisplay;
