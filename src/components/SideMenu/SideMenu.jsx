import styles from "./SideMenu.module.css";
import Footer from "../Footer/Footer.jsx";
import ShowTasks from "../ShowTasks/ShowTasks";
import MyList from "../ListItems/ListItem.jsx";

import {
  useGetRoutineActivitiesQuery,
  useGetStudyingQuery,
  useGetDailyTasksProjectsQuery,
  useGetChinguQuery,
} from "../../redux/api.js";

const SideMenu = () => {
  const {
    data: routineActivityQuery,
    isSuccess: isRoutineActivityQuerySuccess,
  } = useGetRoutineActivitiesQuery();
  const { data: studyingQuery, isSuccess: isStudyingQuerySuccess } =
    useGetStudyingQuery();
  const {
    data: dailyTasksProjectsQuery,
    isSuccess: isDailyTasksProjectsQuerySuccess,
  } = useGetDailyTasksProjectsQuery();
  const { data: chinguQuery, isSuccess: isChinguQuerySuccess } =
    useGetChinguQuery();

  let isDataSuccess =
    !isRoutineActivityQuerySuccess ||
    !isStudyingQuerySuccess ||
    !isDailyTasksProjectsQuerySuccess ||
    !isChinguQuerySuccess;

  return (
    <aside>
      <div className={styles["empty-container"]}></div>
      <div className={styles["container"]}>
        <button className={styles["container-button"]}>
          <img
            src="/dashboardIcon.svg"
            alt="Logo"
            className={styles["icon"]}
          ></img>

          <p>Dashboard</p>
        </button>
      </div>

      <div className={styles["container"]}>
        <button className={styles["container-button"]}>
          <div className={styles["task-box"]}>
            <img
              src="/taskIcon.svg"
              alt="Logo"
              className={styles["icon"]}
            ></img>
            <p>Tasks</p>
          </div>
          <div className={styles["task-count"]}>
            <p>16</p>
          </div>
        </button>
      </div>
      <div className={styles["empty-container"]}></div>
      <MyList />
      {/* <div>
        <section className={styles.apiContentSection}>
          {isDataSuccess ? (
            <p className={styles["dashboard-content-section__error"]}>
              Data is not loaded yet
            </p>
          ) : (
            <>
              <ShowTasks apiEndPoint={routineActivityQuery} />
              <ShowTasks apiEndPoint={studyingQuery} />
              <ShowTasks apiEndPoint={dailyTasksProjectsQuery} />
              <ShowTasks apiEndPoint={chinguQuery} />
            </>
          )}
        </section>
      </div> */}
      <Footer />
    </aside>
  );
};

export default SideMenu;
