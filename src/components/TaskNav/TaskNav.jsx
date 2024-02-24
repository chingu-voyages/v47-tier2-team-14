import styles from "./TaskNav.module.css";
import PropTypes from "prop-types";

const TaskNav = ({ data }) => {
  return (
    // Side Menu Task List
    <div>
      {data.activityTypes?.map((activityType, index) => (
        <div key={index} className={styles.itemsContainer}>
          <img
            src="/arrow-categoryIcon.svg"
            alt="Logo"
            className={styles.icon}
          />
          <img src="/elipseIcon.svg" alt="Logo" />
          <p>{activityType.activityName}</p>
          <p className={styles.counter}>{(activityType.Tasks || []).length}</p>
        </div>
      ))}
    </div>
  );
};

TaskNav.propTypes = {
  data: PropTypes.shape({
    activityTypes: PropTypes.arrayOf(
      PropTypes.shape({
        activityName: PropTypes.string.isRequired,
        Tasks: PropTypes.array.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
export default TaskNav;
