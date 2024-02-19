// import { useState } from "react";
import TaskNav from "../TaskNav/TaskNav";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./ListItem.module.css";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useTaskManager } from "../TaskManager/TaskManager";
import { allData } from "../../data/tasks-example";

const initialData = JSON.parse(localStorage.getItem("tasksData")) || [];
const MyList = () => {
  const { data, isModalOpen, openModal, closeModal, handleSave } =
    useTaskManager(initialData);
  // const [data, setData] = useState(() => {
  //   // Initialize data from local storage if available
  //   const localData = localStorage.getItem("tasksData");
  //   return localData ? JSON.parse(localData) : allData;
  // });

  // Deletes a Task from localStorage
  // const handleDelete = (categoryName) => {
  //   const filteredData = data.filter(
  //     (item) => item.categoryName !== categoryName
  //   );
  //   setData(filteredData);
  //   localStorage.setItem("tasksData", JSON.stringify(filteredData));
  // };

  return (
    <section className={styles.section}>
      <div className={styles.myListContainer}>
        <div className={styles.mylistBox}>
          <img src="/mylistIcon.svg" alt="Logo" className={styles.icon}></img>

          <p>My List</p>
        </div>
        <div>
          <button
            title="create a new Task"
            onClick={openModal}
            className={styles.mylistButton}
          >
            <AddBoxOutlinedIcon className={styles.icon} />
          </button>
        </div>

        {/* Modal start */}
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <TaskForm
              onSave={handleSave}
              onClose={closeModal}
              existingCategories={data.map((item) => item.categoryName)}
            />
          </Modal>
        )}
        {/* Modal ends */}
      </div>

      {/* Dropdown toggle start */}

      {data.map((item, index) => (
        <Dropdown
          title={`${item.categoryName} ${item.activityTypes.length || 0}`}
          key={index}
          // onDelete={() => handleDelete(item.categoryName)}
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
