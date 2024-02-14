import styles from "./TasksList.module.css";
import PropTypes from "prop-types";

const TasksList = ({ children }) => {
  return <li className={styles["tasks-list"]}>{children}</li>;
};

TasksList.propTypes = {
  children: PropTypes.string.isRequired,
};
export default TasksList;
