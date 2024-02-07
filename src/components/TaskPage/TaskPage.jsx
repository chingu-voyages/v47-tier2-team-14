import styles from "../TaskPage/TaskPage.module.css";
import { Link } from "react-router-dom";

const TaskPage = () => {
  return (
    <div className={styles.TaskPageContainer}>
      <div className={styles.TaskPageNav}>
        <div className={styles.TaskPageLeftNav}>
          <div className={styles.TaskPageLeftNavDiv}>
            <img
              src="./rectangle-list.svg"
              alt="Logo"
              className={styles.TaskPageNavIcon}
            ></img>
            <p>List</p>
          </div>
          <div className={styles.TaskPageLeftNavDiv}>
            <img
              src="./calendar.svg"
              alt="Logo"
              className={styles.TaskPageNavIcon}
            ></img>
            <p>Calender</p>
          </div>
        </div>

        <Link className={styles.TaskPageNavRight}>
          <button>
            <img
              src="./plus-small.svg"
              alt="Logo"
              className={styles.TaskPageNavIcon}
            ></img>
            <p> New Task</p>
          </button>
        </Link>
      </div>
      <div className={styles.TaskPageBody}>
        <div className={styles.TaskPageBodyNav}>
          <div className={styles.TaskPageBodyNav}>
            <img
              src="./angle-small-left.svg"
              alt="Logo"
              className={styles.TaskPageNavIcon}
            ></img>
            <p>Jan 01, 2024</p>
            <img
              src="./angle-small-right.svg"
              alt="Logo"
              className={styles.TaskPageNavIcon}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskPage;
