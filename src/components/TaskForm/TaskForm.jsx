import { useState, useEffect } from "react";
import styles from "./TaskForm.module.css";
import PropTypes from "prop-types";

const TaskForm = ({ onSave, onClose, existingCategories }) => {
  const [categoryName, setCategoryName] = useState("");
  const [isNewCategory, setIsNewCategory] = useState(false);
  const [isNewActivity, setIsNewActivity] = useState(false);
  const [activityName, setActivityName] = useState("");
  const [newActivityName, setNewActivityName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [days, setDays] = useState("");

  // auto select existing Category if available
  useEffect(() => {
    if (existingCategories.length === 0) {
      setCategoryName(existingCategories[0]);
      setIsNewCategory(false);
    }
  }, [existingCategories]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !categoryName ||
      (isNewActivity ? !newActivityName : !activityName) ||
      !taskName ||
      !taskDescription ||
      !days
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Determine the activity name based on whether it's new or existing
    const finalActivityName = isNewActivity ? newActivityName : activityName;

    onSave({
      categoryName,
      isNewCategory,
      activity: {
        activityName: finalActivityName,
        isNewActivity,
        task: {
          taskName,
          taskDescription,
          days,
        },
      },
    });

    resetForm();
    onClose();
  };

  const resetForm = () => {
    setCategoryName(existingCategories[0] || "");
    setIsNewCategory(existingCategories.length === 0);
    setIsNewActivity(false);
    setActivityName("");
    setNewActivityName("");
    setTaskName("");
    setTaskDescription("");
    setDays("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.mainForm}>
      <div className={styles.modalTitle}>
        <h2>Add A New Task</h2>
      </div>
      <div className={styles.categorySelection}>
        <label>
          Category:
          {isNewCategory ? (
            <input
              type="text"
              placeholder="New Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          ) : (
            <>
              <select
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                disabled={isNewCategory}
              >
                {existingCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => setIsNewCategory(true)}
                className={styles.newCategoryButton}
              >
                New Category
              </button>
            </>
          )}
        </label>
      </div>

      <div className={styles.field}>
        <label>
          Activity Name:
          {isNewActivity || isNewCategory ? (
            <input
              type="text"
              placeholder="New Activity Name"
              value={isNewActivity ? newActivityName : activityName}
              onChange={(e) =>
                isNewActivity
                  ? setNewActivityName(e.target.value)
                  : setActivityName(e.target.value)
              }
            />
          ) : (
            <>
              <input
                type="text"
                value={activityName}
                onChange={(e) => setActivityName(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setIsNewActivity(true)}
                className={styles.addNewActivityButton}
              >
                Add New Activity
              </button>
            </>
          )}
        </label>
      </div>
      <div className={styles.field}>
        <label>
          Task Name:
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.field}>
        <label>
          Task Description:
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.field}>
        <label>
          Day:
          <input
            type="date"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.addButtonContainer}>
        <button type="submit" className={styles.saveButton}>
          Save
        </button>
        <button
          type="button"
          onClick={resetForm}
          className={styles.clearButton}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

//Props validation
TaskForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  existingCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TaskForm;
