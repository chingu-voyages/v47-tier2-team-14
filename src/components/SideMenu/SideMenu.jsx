import styles from "./SideMenu.module.css";

import MyList from "../ListItems/ListItem.jsx";
import { Link, useLocation } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  const isTaskPage = location.pathname === "/taskpage";
  const isDashBoardPage = location.pathname === "/";

  const tasksDataString = localStorage.getItem("tasksData");
  const tasksData = tasksDataString ? JSON.parse(tasksDataString) : [];

  // Calculate the total number of tasks across all categories and activities
  const totalTasksLength = Array.isArray(tasksData)
    ? tasksData.reduce((total, category) => {
        const tasksInCategory = Array.isArray(category.activityTypes)
          ? category.activityTypes.reduce(
              (sum, activity) =>
                sum +
                (Array.isArray(activity.Tasks) ? activity.Tasks.length : 0),
              0
            )
          : 0;
        return total + tasksInCategory;
      }, 0)
    : 0;

  return (
    <aside>
      <div className={styles["empty-container"]}></div>
      <div className={styles["container"]}>
        <Link
          to="/"
          className={`${styles.containerButton} ${
            isDashBoardPage ? styles.BoldLink : ""
          }`}
        >
          <img
            src="/dashboardIcon.svg"
            alt="Logo"
            className={`${styles.icon} ${
              isDashBoardPage ? styles.BoldIcon : ""
            }`}
          ></img>

          <p className={styles.containerButtonText}>Dashboard</p>
        </Link>
      </div>

      <div className={styles.container}>
        <Link
          to="/taskpage"
          className={`${styles.containerButton} ${
            isTaskPage ? styles.BoldLink : ""
          }`}
        >
          <div className={styles["task-box"]}>
            <img
              src="/taskIcon.svg"
              alt="Logo"
              className={`${styles.icon} ${isTaskPage ? styles.BoldIcon : ""}`}
            ></img>
            <p className={styles.containerButtonText}>Tasks</p>
          </div>

          <div
            className={`${styles.taskCount} ${
              isTaskPage ? styles.BoldLink : ""
            }`}
          >
            <p>{totalTasksLength}</p>
          </div>
        </Link>
      </div>
      <div className={styles["empty-container"]}></div>
      <MyList />
    </aside>
  );
};

export default SideMenu;
