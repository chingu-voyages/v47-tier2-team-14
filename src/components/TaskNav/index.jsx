import styles from "./TaskNav.module.css";
import PropTypes from "prop-types";

const TaskNav = ({ data }) => {
  return (
    <div>
      <div className={styles.itemsContainer}>
        <img src="/arrow-categoryIcon.svg" alt="Logo" className={styles.icon} />
        <img src="/elipseIcon.svg" alt="Logo" />
        <p>{data.activityTypes[0].activityName}</p>
      </div>
      <div className={styles.itemsContainer}>
        <img src="/arrow-categoryIcon.svg" alt="Logo" className={styles.icon} />
        <img src="/elipseIcon.svg" alt="Logo" />
        <p>{data.activityTypes[1].activityName}</p>
      </div>
    </div>
  );
};

TaskNav.propTypes = {
  data: PropTypes.string.isRequired,
};
export default TaskNav;
