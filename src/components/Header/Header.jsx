import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img
          src="/checklisLogo.svg"
          alt="Logo"
          className={styles["checklis-icon"]}
        ></img>
      </div>
    </header>
  );
};

export default Header;
