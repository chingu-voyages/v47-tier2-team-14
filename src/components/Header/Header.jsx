import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1 className={styles['header-text']}>Chingu Task Manager</h1>
    </header>
  )
}

export default Header;
