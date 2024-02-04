import styles from "./ShowTasks.module.css";

import Tasks from "../Tasks/Tasks";
import TasksList from "../TasksList/TasksList";

const ShowTasks = (apiEndPoint) => {
  const dataNotAvailable = <p>Data unavailable</p>;

  let tasksCategoryName;
  let tasksActivityName = [];
  let showActivityName;
  let tasksArray = [];
  let showTasksArrayList;
  let tasksDays = [];
  let showTasksDays;

  if (apiEndPoint) {
    const iterate = (obj) => {
      Object.keys(obj).forEach((key) => {
        console.log(`ITERATE apiEndPoint ---- key: ${key}, value: ${obj[key]}`);
        if (key === "categoryName") {
          tasksCategoryName = <h2>{obj[key]} </h2>;
        }

        if (key === "activityName") {
          tasksActivityName.push(obj[key]);
        }

        if (key === "taskName" || key === "taskDescription") {
          tasksArray.push(obj[key]);
        }

        if (key === "days") {
          tasksDays.push(obj[key]);
        }

        if (typeof obj[key] === "object" && obj[key] !== null) {
          console.log("Iterate over nested object");

          iterate(obj[key]);
        }
      });
    };
    iterate(apiEndPoint);
  }

  showActivityName = tasksActivityName.map((activityName) => (
    <TasksList key={activityName}> {activityName} </TasksList>
  ));
  showTasksArrayList = tasksArray.map((task) => <li key={task}> {task} </li>);
  showTasksDays = tasksDays.map((days) => <li key={days}> {days} </li>);

  return (
    <section>
      {apiEndPoint ? (
        <>
          {tasksCategoryName.length !== 0
            ? tasksCategoryName
            : dataNotAvailable}

          <Tasks>
            {showActivityName}
            {/* {{ showTasksArrayList }}
            {{ showTasksDays }} */}
          </Tasks>
        </>
      ) : (
        <p>No Data</p>
      )}
    </section>
  );
};

export default ShowTasks;
