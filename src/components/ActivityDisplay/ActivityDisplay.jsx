import styles from "./ActivityDisplay.module.css";
import Tasks from "../Tasks/Tasks";
import PropTypes from "prop-types";

const ActivityDisplay = ({ data }) => {
  return (
    <div className={styles.activityDiv}>
      <div className={styles.activityNameDiv}>
        <img src="/elipseIcon.svg" alt="Logo" className={styles.elipseIcon} />
        <p>{data.activityName} </p>
      </div>

      {data.Tasks.map((item, index) => (
        <Tasks data={item} key={index} id={index} />
      ))}
    </div>
  );
};

ActivityDisplay.propTypes = {
  data: PropTypes.shape({
    activityName: PropTypes.string.isRequired,
    Tasks: PropTypes.string,
  }).isRequired,
};

export default ActivityDisplay;
