import styles from './SideMenu.module.css'
// import ShowTasks from "../ShowTasks/ShowTasks";
import MyList from "../ListItems/ListItem.jsx";
import { Link, useLocation } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  const isTaskPage = location.pathname === "/taskpage";
  const isDashBoardPage = location.pathname === "/";

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
            className={styles["icon"]}
          ></img>

          <p>Dashboard</p>
        </Link>
      </div>

      <div className={styles["container"]}>
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
              className={`${styles.Icon} ${isTaskPage ? styles.BoldIcon : ""}`}
            ></img>
            <p>Tasks</p>
          </div>

          <div className={styles["task-count"]}>
            <p>16</p>
          </div>
        </Link>
      </div>
      <div className={styles["empty-container"]}></div>
      <MyList />
    </aside>
  );
};

export default SideMenu
