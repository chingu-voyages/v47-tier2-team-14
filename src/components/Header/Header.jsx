import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["search-bar"]}>
        <input type="text" placeholder="Search..." />
        <button>
          <SearchIcon />
        </button>
      </div>
      <button className={styles["notifications-button"]}>
        <NotificationsIcon />
      </button>
    </header>
  );
};

export default Header;
