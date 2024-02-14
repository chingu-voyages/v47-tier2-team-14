import { useState } from "react";
// import PropTypes from "prop-types";
import TaskNav from "../TaskNav/TaskNav";
import TaskForm from "../TaskForm/TaskForm";
import Modal from "../Modal/Modal";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./ListItem.module.css";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import { allData } from "../../data/tasks-example";

const MyList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(() => {
    // Initialize data from local storage if available
    const localData = localStorage.getItem("tasksData");
    return localData ? JSON.parse(localData) : allData;
  });

  // Saves new Task to localStorage
  const handleSave = (newData) => {
    const updatedData = [...data, newData];
    setData(updatedData);
    localStorage.setItem("tasksData", JSON.stringify(updatedData));
  };

  // Deletes a Task from localStorage
  const handleDelete = (categoryName) => {
    const filteredData = data.filter(
      (item) => item.categoryName !== categoryName
    );
    setData(filteredData);
    localStorage.setItem("tasksData", JSON.stringify(filteredData));
  };

  return (
    <section className={styles.section}>
      <div className={styles.myListContainer}>
        <div className={styles.mylistBox}>
          <img src="/mylistIcon.svg" alt="Logo" className={styles.icon}></img>

          <p>My List</p>
        </div>
        <div>
          <button
            onClick={() => setModalOpen(true)}
            className={styles.mylistButton}
          >
            <AddBoxOutlinedIcon className={styles.icon} />
          </button>
        </div>
        {isModalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            {/* MODAL BODY START */}
            <h2 className={styles.modalTitle}>Add A New Task</h2>

            <TaskForm onSave={handleSave} />

            {/* MODAL BODY END */}
          </Modal>
        )}
      </div>

      {/* Dropdown toggle start */}

      {data.map((item, index) => (
        <Dropdown
          title={
            <span>
              <span className={styles.categoryName}>{item.categoryName}</span>
              <span className={styles.categoryLength}>
                {" "}
                {item.activityTypes.length}
              </span>
            </span>
          }
          key={index}
          onDelete={() => handleDelete(item.categoryName)}
        >
          <TaskNav data={item} />
        </Dropdown>
      ))}

      {allData.map((data, index) => (
        <Dropdown
          title={`${data.categoryName} ${data.activityTypes.length || 0}`}
          key={index}
        >
          <TaskNav data={data} />
        </Dropdown>
      ))}

      {/* Dropdown toggle end */}
    </section>
  );
};

export default MyList;
