import { useState } from "react";
import PropTypes from "prop-types";
import TaskNav from "../TaskNav";

import styles from "./ListItem.module.css";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import { allData } from "../../data/tasks-example";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.categoryBox}>
        <div className={styles.mylistBox}>
          <img src="/elipseIcon.svg" alt="Logo" className={styles.elipseIcon} />
          <p className={styles.routineText}>{title}</p>
        </div>
        <button onClick={toggleDropdown} className={styles.mylistButton}>
          <img src="/arrowIcon.svg" alt="Toggle" className={styles.icon} />
        </button>
      </div>
      <div className={`${styles.dropdownContent} ${isOpen ? styles.open : ""}`}>
        {children}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const MyList = () => {
  return (
    <section className={styles.section}>
      <div className={styles.myListContainer}>
        <div className={styles.mylistBox}>
          <img src="/mylistIcon.svg" alt="Logo" className={styles.icon}></img>

          <p>My List</p>
        </div>
        <div>
          <button className={styles.mylistButton}>
            <AddBoxOutlinedIcon className={styles.icon} />
          </button>
        </div>
      </div>

      {allData.map((data, index) => (
        <Dropdown title={data.categoryName} key={index}>
          <TaskNav data={data} />
        </Dropdown>
      ))}
    </section>
  );
};

export default MyList;
