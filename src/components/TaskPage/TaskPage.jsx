// import { useState } from "react";

import styles from "../TaskPage/TaskPage.module.css";
import { Link } from "react-router-dom";

import { allData } from "../../data/tasks-example";
import CategoryType from "../../components/CategoryType/CategoryType";

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${month}
 . ${day} .${year}`;

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
          <img
            src="./angle-small-left.svg"
            alt="Logo"
            className={styles.TaskPageNavIcon}
          ></img>
          <p>{currentDate}</p>
          <img
            src="./angle-small-right.svg"
            alt="Logo"
            className={styles.TaskPageNavIcon}
          ></img>
        </div>

        {allData.map((data, index) => (
          <CategoryType data={data} key={index} id={index} />
        ))}
      </div>
    </div>
  );
};
export default TaskPage;
