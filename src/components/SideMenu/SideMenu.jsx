import styles from "./SideMenu.module.css";
// import ShowTasks from "../ShowTasks/ShowTasks";
import MyList from "../ListItems/ListItem.jsx";
import { Link, useLocation } from "react-router-dom";

import { allData } from "../../data/tasks-example.js";

const SideMenu = () => {
  const location = useLocation();
  const isTaskPage = location.pathname === "/taskpage";
  const isDashBoardPage = location.pathname === "/";

  const tasksDataString = localStorage.getItem("tasksData");
  const tasksData = tasksDataString ? JSON.parse(tasksDataString) : [];

  // Combine tasks from local storage and allData

  const combinedTasksData = [...allData, ...tasksData];

  // Calculate the total number of tasks across all categories and activities
  const totalTasksLength = combinedTasksData.reduce((total, category) => {
    const tasksInCategory = category.activityTypes.reduce(
      (sum, activity) => sum + activity.Tasks.length,
      0
    );
    return total + tasksInCategory;
  }, 0);

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
