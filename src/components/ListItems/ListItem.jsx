import React, { useState } from "react";

import styles from "./ListItem.module.css";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const MyList = () => {
  const [open, setOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <section>
      <div className={styles["container"]}>
        <div className={styles["mylist-box"]}>
          <img
            src="/mylistIcon.svg"
            alt="Logo"
            className={styles["icon"]}
          ></img>

          <p>My List</p>
        </div>
        <div>
          <button onClick={handleOpen} className={styles["mylist-button"]}>
            <AddBoxOutlinedIcon className={styles["icon"]} />
          </button>
        </div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["category-box"]}>
          <img
            src="/elipseIcon.svg"
            alt="Logo"
            className={styles["elipse-icon"]}
          ></img>

          <p className={styles["routine-text"]}>ROUTINE</p>
        </div>
        <button onClick={toggleDropdown} className={styles["mylist-button"]}>
          <img src="/arrowIcon.svg" alt="Logo" className={styles["icon"]}></img>
        </button>
        {dropdownOpen && (
          <div className={styles["dropdown-content"]}>
            <div className={styles["items-container"]}>
              <img
                src="/arrow-categoryIcon.svg"
                alt="Logo"
                className={styles["icon"]}
              ></img>
              <img
                src="/elipseIcon.svg"
                alt="Logo"
                className={styles["elipse-icon"]}
              ></img>

              <p>Projects</p>
            </div>

            <div className={styles["items-container"]}>
              <img
                src="/arrow-categoryIcon.svg"
                alt="Logo"
                className={styles["icon"]}
              ></img>
              <img
                src="/elipseIcon.svg"
                alt="Logo"
                className={styles["elipse-icon"]}
              ></img>

              <p>Blog posts</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyList;
